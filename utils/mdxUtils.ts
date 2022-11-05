import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import MDXComponents from '../components/common/MDXComponents';

const root = process.cwd();

export const getFiles = (type: string) => {
  try {
    return fs.readdirSync(path.join(root, 'data', 'blog', type));
  } catch (err) {
    return null;
  }
};

export const getFileBySlug = (type: string, slug: string) => {
  const source = slug
    ? fs.readFileSync(
        path.join(root, 'data', 'blog', type, `${slug}.mdx`),
        'utf-8',
      )
    : fs.readFileSync(path.join('data', 'blog', `${type}.mdx`), 'utf-8');

  const { data, content } = matter(source);

  return {
    data,
    content,
  };
};
