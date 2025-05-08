import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Sam - AI/ML & Cryptography Researcher',
  description: 'A collection of articles and thoughts by Sam on AI, ML, Cryptography, and more.',
};

interface BlogPostPreview {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const generateSlug = (filename: string): string => {
  return filename.replace(/\.md$/, '').toLowerCase().replace(/\s+/g, '-');
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const createExcerpt = (content: string, maxLength: number = 200): string => {
  const cleanedContent = content.replace(/^#.*\n/gm, '') // Remove headings
                              .replace(/\*\*/g, '') // Remove bold
                              .replace(/\*/g, '')   // Remove italic
                              .replace(/`/g, '')    // Remove inline code
                              .replace(/\s+/g, ' ').trim();
  if (cleanedContent.length <= maxLength) return cleanedContent;
  return cleanedContent.substring(0, cleanedContent.lastIndexOf(' ', maxLength)) + '...';
};

async function getAllBlogPreviews(): Promise<BlogPostPreview[]> {
  const blogDir = path.join(process.cwd(), 'blog');
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(blogDir);
  } catch (error) {
    console.error("Could not read blog directory:", error);
    return [];
  }

  const posts = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const stats = fs.statSync(filePath);
      const { data, content } = matter(fileContents);

      const slug = generateSlug(filename);
      // Prefer frontmatter title, then filename if no title
      const title = data.title || filename.replace(/\.md$/, '');
      // Prefer frontmatter date, then file modified time
      const date = data.date ? formatDate(new Date(data.date)) : formatDate(stats.mtime);
      // Prefer frontmatter excerpt, then generated excerpt
      const excerpt = data.excerpt || createExcerpt(content);

      return {
        slug,
        title,
        date,
        excerpt,
      };
    });
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function BlogIndexPage() {
  const posts = await getAllBlogPreviews();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="mb-10 md:mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text">
          Blog <span className="text-brand-accent">Posts</span>
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
          Thoughts on technology, research, and everything in between.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="p-6 rounded-lg bg-light-DEFAULT dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text group-hover:text-brand-accent transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Published on {post.date}
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} className="font-medium text-brand-accent hover:underline">
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">No blog posts found. Check back soon!</p>
      )}
    </div>
  );
} 