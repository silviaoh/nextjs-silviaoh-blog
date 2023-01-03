import { NextApiRequest, NextApiResponse } from 'next';
import { getChildrenDirectory, getMdxFile } from '../../src/utils/mdxUtils';

/**
 * method: 'GET',
 * 카테고리 메뉴
 */
export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const categories = getChildrenDirectory('') || [];
    const mappedCategories = categories.map((categoryName) => {
      const mdxFiles = getChildrenDirectory(categoryName) || [];
      const post = mdxFiles.map((mdxFile) =>
        getMdxFile(categoryName, mdxFile.replace('.mdx', '')),
      );
      return { categoryName, count: post.length };
    });

    const count = mappedCategories.reduce(
      (count: number, currPost: any) => count + currPost.count,
      0,
    );

    res.status(200).json([{ categoryName: 'All', count }, ...mappedCategories]);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error!' });
  }
};
