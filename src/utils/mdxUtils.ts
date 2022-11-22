import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const root = process.cwd();
const CONTENT_ROOT_DIRECTORY = 'content';

export const getDirectory = (type: string) => {
  try {
    return fs.readdirSync(path.join(root, CONTENT_ROOT_DIRECTORY, type));
  } catch (err) {
    return null;
  }
};

export const getFile = (type: string, slug: string) => {
  const source = fs.readFileSync(
    path.join(root, CONTENT_ROOT_DIRECTORY, type, `${slug}.mdx`),
    'utf-8',
  );

  const { data, content } = matter(source);

  return {
    data,
    content,
  };
};
