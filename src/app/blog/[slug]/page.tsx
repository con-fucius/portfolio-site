import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import type { Metadata } from 'next'; // Removed unused ResolvingMetadata

interface PostFrontmatter {
  title?: string;
  date?: string | Date;
  excerpt?: string;
  // Add other potential frontmatter fields here if known
}
interface PostPageProps {
  params: {
    slug: string;
  };
}

const blogDir = path.join(process.cwd(), 'blog');

// Function to generate a slug from a filename
const generateSlug = (filename: string): string => {
  return filename.replace(/\.md$/, '').toLowerCase().replace(/\s+/g, '-');
};

// Function to format date string
const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

// Function to get a single post's content and metadata
async function getPostData(slug: string): Promise<{ frontmatter: PostFrontmatter; content: string; filename: string } | null> { // Use PostFrontmatter interface
  const filenames = fs.readdirSync(blogDir);
  const targetFilename = filenames.find(fname => generateSlug(fname) === slug);

  if (!targetFilename) {
    return null;
  }

  const filePath = path.join(blogDir, targetFilename);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { frontmatter: data, content, filename: targetFilename };
  } catch (error) {
    console.error(`Error reading blog post ${targetFilename}:`, error);
    return null;
  }
}

// Generate params for all blog posts
export async function generateStaticParams() {
  const filenames = fs.readdirSync(blogDir);
  return filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => ({ slug: generateSlug(filename) }));
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: PostPageProps,
  // parent: ResolvingMetadata // Removed unused parameter
): Promise<Metadata> {
  const post = await getPostData(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'This blog post could not be found.'
    };
  }
  const title = post.frontmatter.title || post.filename.replace(/\.md$/, '');
  const description = post.frontmatter.excerpt || post.content.substring(0, 150) + '...';

  return {
    title: `${title} | Sam's Blog`,
    description: description,
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const post = await getPostData(params.slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-brand-accent mb-4">Post Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Sorry, we could not find the post you were looking for.</p> {/* Replaced couldn't */}
        <Link href="/blog" className="text-brand-accent hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  const title = post.frontmatter.title || post.filename.replace(/\.md$/, '');
  const date = post.frontmatter.date ? formatDate(post.frontmatter.date) : formatDate(fs.statSync(path.join(blogDir, post.filename)).mtime);

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="mb-8 md:mb-10 border-b border-gray-300 dark:border-gray-700 pb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-3">
          {title}
        </h1>
        {date && (
          <p className="text-md text-gray-500 dark:text-gray-400">
            Published on {date}
          </p>
        )}
        {/* Add other metadata here if available, e.g., author, tags */}
      </header>
      
      <div className="prose lg:prose-xl dark:prose-invert max-w-none
                      prose-headings:font-gabarito prose-headings:text-light-text prose-headings:dark:text-dark-text
                      prose-p:text-light-text prose-p:dark:text-gray-300
                      prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-light-text prose-strong:dark:text-dark-text
                      prose-code:bg-gray-200 prose-code:dark:bg-gray-700 prose-code:p-1 prose-code:rounded prose-code:text-sm
                      prose-blockquote:border-l-4 prose-blockquote:border-brand-accent prose-blockquote:pl-4 prose-blockquote:italic
                      prose-table:border-collapse prose-table:w-full
                      prose-th:border prose-th:border-gray-300 prose-th:dark:border-gray-600 prose-th:p-2 prose-th:bg-gray-100 prose-th:dark:bg-gray-700 prose-th:text-left
                      prose-td:border prose-td:border-gray-300 prose-td:dark:border-gray-600 prose-td:p-2">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="mt-10 md:mt-12 pt-6 border-t border-gray-300 dark:border-gray-700">
        <Link href="/blog" className="text-brand-accent hover:underline">
          &larr; Back to All Posts
        </Link>
      </div>
    </article>
  );
} 