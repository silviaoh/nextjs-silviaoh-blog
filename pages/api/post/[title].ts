import { NextApiRequest, NextApiResponse } from 'next';
import { IPost } from '../../../src/types';
import getTitlePathParam from '../../../src/utils/getTitlePathParam';
import { getChildrenDirectory, getMdxFile } from '../../../src/utils/mdxUtils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const title = req.query.title;
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

    const post =
      posts.find(
        (postsItem: IPost) => getTitlePathParam(postsItem.data.title) === title,
      ) || {};

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error!' });
  }
};
