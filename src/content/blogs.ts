export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    // Copy this object for every new post.
    slug: "personalization-marketing-science",
    title: "Personalization in Marketing Science: How AI Is Rewriting the Rules of Engagement",
    excerpt: "From RFM scores to reinforcement learning, and what comes after the cookie crumbles.",
    date: "2026-05-01",
    category: "Marketing Science",
    readTime: "8 min read",
    content: `
## Your opening section

Paste your blog content here.

Use a blank line between paragraphs.

## Add another section

- Use hyphens for bullet points
- Keep each bullet on its own line

> Use a greater-than sign for highlighted quotes.
`,
  },
];

// Add future posts above the existing post.
