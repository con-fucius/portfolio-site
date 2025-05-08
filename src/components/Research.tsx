import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Helper function to read markdown file content
async function getMarkdownContent(filePath: string): Promise<string> {
  const fullPath = path.join(process.cwd(), '../', filePath);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return fileContents;
  } catch (error) {
    console.error(`Error reading markdown file ${filePath}:`, error);
    return 'Error: Could not load research content.'; // Fallback content
  }
}

const Research = async () => {
  const markdownFilePath = 'research/Agentic Tools and Frameworks Comparison.md';
  const markdownContent = await getMarkdownContent(markdownFilePath);

  return (
    <section id="research" className="py-16 md:py-24" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      {/* TODO: Apply dark mode background via CSS variable or different approach if needed */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text">
          Research <span className="text-brand-accent">Highlights</span>
        </h2>
        <article className="prose lg:prose-xl dark:prose-invert max-w-none 
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
            {markdownContent}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  );
};

export default Research; 