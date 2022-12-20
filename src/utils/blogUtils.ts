import matter from 'gray-matter';
import { getDirectory, getFile } from './mdxUtils';

export const getPaths = () => {
  const directories = getDirectory('') || [];

  return directories.reduce((blogsArr: any, directory) => {
    return [
      ...blogsArr,
      {
        params: {
          category: directory.toString(),
        },
      },
    ];
  }, []);
};

export const getBlogs = () => {
  const directories = getDirectory('') || [];

  const blogs = directories.reduce((blogsArr: any, categoryName: string) => {
    const filesInCategory = getDirectory(categoryName)?.reduce(
      (filesInCategoryArr: any, mdxFile: string) => {
        const source = getFile(categoryName, mdxFile.replace('.mdx', ''));
        const { content, data } = matter(source);

        return [
          ...filesInCategoryArr,
          {
            metaData: data,
            content,
          },
        ];
      },
      [],
    );

    return [
      ...blogsArr,
      {
        categoryName,
        filesInCategory,
        count: filesInCategory?.length,
      },
    ];
  }, []);

  return blogs;
};
