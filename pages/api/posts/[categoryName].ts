import { NextApiRequest, NextApiResponse } from 'next';
import { getChildrenDirectory, getMdxFile } from '../../../src/utils/mdxUtils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const categoryName = req.query.categoryName;
    const categories = getChildrenDirectory('') || [];

    if (typeof categories === null) {
      res
        .status(500)
        .json({ statusCode: 500, message: 'Unable to load category list.' });
      return;
    }

    if (typeof categoryName !== 'string') {
      res.status(500).json({
        statusCode: 500,
        message: 'Type of "categoryName" must be a string',
      });
      return;
    }

    const mdxFiles = getChildrenDirectory(categoryName) || [];
    const posts = await Promise.all(
      mdxFiles.map(async (mdxFile) => {
        return await getMdxFile(categoryName, mdxFile.replace('.mdx', ''));
      }),
    );

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error!' });
  }
};
