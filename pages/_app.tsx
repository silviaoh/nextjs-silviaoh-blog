import React from 'react';
import GlobalStyle from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Layout from '../components/Layout';
import path from 'path';
import matter from 'gray-matter';

const MyApp = ({ Component, pageProps, props }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout {...props}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;

const fs = require('fs');
let test: any = [];
const accessDirectoryOrFile = (directory: string) => {
  try {
    if (fs?.readdirSync(directory).length > 0) {
      fs.readdirSync(directory).forEach((parent: any) => {
        const folderPath = path.join(
          process.cwd(),
          `${directory.split('/').slice(5).join('/')}/${parent}`,
        );
        if (folderPath.includes('.mdx')) test.push(folderPath);
        accessDirectoryOrFile(folderPath);
      });
      return test;
    }
  } catch (err) {
    return;
  }
};

MyApp.getInitialProps = async () => {
  const folderPath = path.join(process.cwd(), 'contents');

  const mdxFileUrls = accessDirectoryOrFile(folderPath);

  const posts = mdxFileUrls.reduce((newArr: any, cur: any) => {
    const rawFileSource = fs.readFileSync(cur);
    const { content, data } = matter(rawFileSource);

    const categoriesArr = cur.split('/').slice(6);

    newArr.push({
      categories: {
        large: categoriesArr[0],
        medium: categoriesArr[1],
        small: categoriesArr[2],
      },
      data: {
        ...data,
        content: content,
      },
    });

    return newArr;
  }, []);

  const sideNavCategories = posts.reduce((newArr: any, cur: any) => {
    console.log('cur.categories', cur.categories);
    const largeCategoryName = cur.categories.large;
    const mediumCategoryName = cur.categories.medium;
    const smallCategoryName = cur.categories.small;

    if (
      newArr.length !== 0 &&
      newArr.find((v: any) => v.name === largeCategoryName)
    ) {
      const largeCategoryIdx = newArr.findIndex(
        (v: any) => v.name === largeCategoryName,
      );

      console.log('index', largeCategoryIdx);

      const isMediumCategoryExist = newArr[largeCategoryIdx].children.find(
        (v: any) => v.name === mediumCategoryName,
      );
      const mediumCategoryIdx = newArr[largeCategoryIdx].children.findIndex(
        (v: any) => v.name === mediumCategoryName,
      );

      if (isMediumCategoryExist) {
        const isSmallCategoryExist = newArr[largeCategoryIdx].children[
          mediumCategoryIdx
        ].children.find((v: any) => v.name === smallCategoryName);
        const smallCategoryIdx = newArr[largeCategoryIdx].children[
          mediumCategoryIdx
        ].children.findIndex((v: any) => v.name === smallCategoryName);

        if (isSmallCategoryExist) {
          newArr[largeCategoryIdx].children[mediumCategoryIdx].children.splice(
            smallCategoryIdx,
            1,
            {
              name: smallCategoryName,
            },
          );
        } else {
          newArr[largeCategoryIdx].children.splice(mediumCategoryIdx, 1, {
            name: mediumCategoryName,
            children: [
              ...newArr[largeCategoryIdx].children[mediumCategoryIdx].children,
              { name: smallCategoryName },
            ],
          });
        }
      } else {
        newArr.splice(largeCategoryIdx, 1, {
          name: largeCategoryName,
          children: [
            ...newArr[largeCategoryIdx].children,
            {
              name: mediumCategoryName,
              children: [{ name: smallCategoryName }],
            },
          ],
        });
      }
    } else {
      newArr.push({
        name: largeCategoryName,
        children: [
          { name: mediumCategoryName, children: [{ name: smallCategoryName }] },
        ],
      });
    }

    return newArr;
  }, []);

  return {
    props: { posts, sideNavCategories },
  };
};
