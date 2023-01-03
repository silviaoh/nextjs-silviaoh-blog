import matter from 'gray-matter';
import { IBlogPostPaths, IBlogs } from '../types';
import { getDirectory, getFile } from './mdxUtils';

export const getPaths = () => {
  const directories = getDirectory('') || [];

  return directories.reduce((blogsArr: any, directory) => {
    return [
      ...blogsArr,
      {
        params: {
          categoryName: directory.toString(),
        },
      },
    ];
  }, []);
};

export const getBlogPostPaths = (blogs: IBlogs[]) => {
  return blogs
    .map((blog) => blog.filesInCategory)
    .reduce((categoryPost: IBlogPostPaths[], currentPost) => {
      currentPost.forEach((post) => {
        categoryPost.push({ params: { slug: post.metaData.id } });
      });
      return categoryPost;
    }, []);
};

export const getBlogs = () => {
  const directories = getDirectory('') || [];

  const blogs = directories.reduce((blogsArr: any, categoryName: string) => {
    const filesInCategory = getDirectory(categoryName)?.reduce(
      (filesInCategoryArr: any, mdxFile: string) => {
        const mdxFileName = mdxFile.replace('.mdx', '');
        const source = getFile(categoryName, mdxFile.replace('.mdx', ''));
        const { content, data } = matter(source);

        return [
          ...filesInCategoryArr,
          {
            metaData: { id: mdxFileName, ...data },
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
