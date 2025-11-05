// app/learn/understanding-code-switching/page.tsx
import ArticleUnderstandingCodeSwitching from '@/app/components/articles/ArticleUnderstandingCodeSwitching';
import BlogPostLayout from '@/app/components/BlogPostLayout';
import type { Metadata } from 'next';

const postInfo = {
  title: "Understanding Code-Switching",
  date: "November 6, 2025",
  heroImage: "/blog-images/code-switching.png", 
  slug: "understanding-code-switching"
};

export const metadata: Metadata = {
  title: postInfo.title,
  description: "Learn about code-switching in bilingual children, its benefits, challenges, and why it is a sign of advanced linguistic ability.",
  alternates: { canonical: `/learn/${postInfo.slug}` },
};

export default function Page() {
  return (
    <main>
      <BlogPostLayout
        title={postInfo.title}
        date={postInfo.date}
        heroImage={postInfo.heroImage}
      >
        <ArticleUnderstandingCodeSwitching />
      </BlogPostLayout>
    </main>
  );
}