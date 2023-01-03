import { NextApiRequest, NextApiResponse } from 'next';
import { getChildrenDirectory, getMdxFile } from '../../../src/utils/mdxUtils';

export default (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const categories = getChildrenDirectory('') || [];

    if (typeof categories === null) {
      res
        .status(500)
        .json({ statusCode: 500, message: 'Unable to load category list.' });
      return;
    }

    const posts = categories.reduce((acc: any, categoryName) => {
      const mdxFiles = getChildrenDirectory(categoryName) || [];
      mdxFiles.forEach((mdxFile) => {
        const mdxContents = getMdxFile(
          categoryName,
          mdxFile.replace('.mdx', ''),
        );
        acc.push(mdxContents);
      });

      return acc;
    }, []);

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error!' });
  }
};
