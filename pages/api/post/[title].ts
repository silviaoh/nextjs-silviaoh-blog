import { NextApiRequest, NextApiResponse } from 'next';
import { IPost } from '../../../src/types';
import getTitlePathParam from '../../../src/utils/getTitlePathParam';
import { getChildrenDirectory, getMdxFile } from '../../../src/utils/mdxUtils';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const title = req.query.title;
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

    const post =
      posts.find(
        (postsItem: IPost) => getTitlePathParam(postsItem.data.title) === title,
      ) || {};

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error!' });
  }
};
