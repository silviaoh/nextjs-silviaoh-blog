import { NextApiRequest, NextApiResponse } from 'next';
import { getChildrenDirectory, getMdxFile } from '../../../src/utils/mdxUtils';

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const categories = getChildrenDirectory('') || [];

    if (typeof categories === null) {
      res
        .status(500)
        .json({ statusCode: 500, message: 'Unable to load category list.' });
      return;
    }

    const posts = await categories.reduce(
      async (prevPromise: any, categoryName) => {
        let arr = await prevPromise;
        const mdxFiles = getChildrenDirectory(categoryName) || [];

        for (const mdxFile of mdxFiles) {
          const mdxContents = await getMdxFile(
            categoryName,
            mdxFile.replace('.mdx', ''),
          );
          arr.push(mdxContents);
        }

        return arr;
      },
      Promise.resolve([]),
    );

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error!' });
  }
};
