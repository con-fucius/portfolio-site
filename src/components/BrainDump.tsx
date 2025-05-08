import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // For potential frontmatter parsing
import Link from 'next/link';

interface BlogPostPreview {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

// Function to generate a slug from a filename
const generateSlug = (filename: string): string => {
  return filename.replace(/\.md$/, '').toLowerCase().replace(/\s+/g, '-');
};

// Function to format date string (basic example)
const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

// Function to create an excerpt (simple implementation)
const createExcerpt = (content: string, maxLength: number = 150): string => {
  const cleanedContent = content.replace(/\s+/g, ' ').trim(); // Remove extra whitespace
  if (cleanedContent.length <= maxLength) return cleanedContent;
  return cleanedContent.substring(0, cleanedContent.lastIndexOf(' ', maxLength)) + '...';
};

async function getBlogPreviews(): Promise<BlogPostPreview[]> {
  const blogDir = path.join(process.cwd(), '../blog');
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
      // blogDir already points to the correct location relative to project root
      const filePath = path.join(process.cwd(), '../blog', filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const stats = fs.statSync(filePath);
      const { data, content } = matter(fileContents); // data would be frontmatter

      const slug = generateSlug(filename);
      const title = data.title || filename.replace(/\.md$/, '');
      const date = data.date ? formatDate(new Date(data.date)) : formatDate(stats.mtime);
      const excerpt = data.excerpt || createExcerpt(content);

      return {
        slug,
        title,
        date,
        excerpt,
      };
    });

  // Sort posts by date, most recent first (if dates are reliable)
  // For now, using filename order or relying on fs.readdirSync order
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const readingListData = [
  {
    title: "The Art of Strategy: A Game Theorist's Guide to Success in Business and Life",
    author: "Avinash K. Dixit & Barry J. Nalebuff",
    link: "#", // Placeholder
  },
  {
    title: "The Master Algorithm: How the Quest for the Ultimate Learning Machine Will Remake Our World",
    author: "Pedro Domingos",
    link: "#",
  },
  {
    title: "Hello World: Being Human in the Age of Algorithms",
    author: "Hannah Fry",
    link: "#",
  },
  {
    title: "The Formula: The Universal Laws of Success",
    author: "Albert-László Barabási",
    link: "#",
  },
  {
    title: "Superforecasting: The Art and Science of Prediction",
    author: "Philip E. Tetlock & Dan Gardner",
    link: "#",
  },
];

const BrainDump = async () => {
  const latestArticles = await getBlogPreviews();

  return (
    <section id="braindump" className="py-16 md:py-24 bg-light-DEFAULT dark:bg-dark-DEFAULT">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text">
          Brain <span className="text-brand-accent">Dump</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Column 1: Latest Articles */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-light-text dark:text-dark-text">
              Latest <span className="text-brand-accent">Articles</span>
            </h3>
            <div className="space-y-6">
              {latestArticles.length > 0 ? (
                latestArticles.slice(0, 3).map((post) => ( // Displaying up to 3 latest
                  <div key={post.slug} className="p-4 rounded-md bg-light-DEFAULT dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h4 className="text-lg font-bold text-brand-accent hover:underline mb-1">
                        {post.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {post.excerpt}
                    </p>
                  </div>
                )))
               : (
                <p className="text-gray-600 dark:text-gray-400">No articles yet. Check back soon!</p>
              )}
            </div>
          </div>

          {/* Column 2: Reading List */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-light-text dark:text-dark-text">
              Reading <span className="text-brand-accent">List</span>
            </h3>
            <ul className="space-y-4">
              {readingListData.map((item, index) => (
                <li key={index} className="p-4 rounded-md bg-light-DEFAULT dark:bg-gray-800 shadow-md">
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">
                    <h4 className="font-semibold text-light-text dark:text-dark-text">{item.title}</h4>
                  </Link>
                  <p className="text-sm text-gray-500 dark:text-gray-400">by {item.author}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrainDump; 