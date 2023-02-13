import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';
import { serialize } from 'next-mdx-remote/serialize';

const systemRootUrl = process.cwd();
const CONTENT_ROOT_DIRECTORY_NAME = 'articles';

export const getChildrenDirectory = (directoryName: string) => {
  try {
    return fs.readdirSync(
      path.join(systemRootUrl, CONTENT_ROOT_DIRECTORY_NAME, directoryName),
    );
  } catch (err) {
    return null;
  }
};

export const getMdxFile = async (directoryName: string, slug: string) => {
  const source = fs.readFileSync(
    path.join(
      systemRootUrl,
      CONTENT_ROOT_DIRECTORY_NAME,
      directoryName,
      `${slug}.mdx`,
    ),
    'utf-8',
  );

  const { data, content } = matter(source);
  const serializedContent = await serialize(content, {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [[remarkGfm]],
      rehypePlugins: [[rehypePrismPlus]],
    },
  });

  return {
    data,
    content: serializedContent,
  };
};
