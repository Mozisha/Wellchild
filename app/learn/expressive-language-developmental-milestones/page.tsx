// app/learn/expressive-language-developmental-milestones/page.tsx
import ArticleExpressiveLanguageMilestones from '@/app/components/articles/ArticleExpressiveLanguageMilestones';
import BlogPostLayout from '@/app/components/BlogPostLayout';
import type { Metadata } from 'next';

const postInfo = {
  title: "Expressive Language Developmental Milestones",
  date: "October 16, 2025",
  heroImage: "/blog-images/baby-girl.png", 
  slug: "expressive-language-developmental-milestones"
};

export const metadata: Metadata = {
  title: postInfo.title,
  description: "A guide to expressive language milestones for children from birth to 5 years, according to ASHA and Brown's Developmental Stages.",
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
        <ArticleExpressiveLanguageMilestones />
      </BlogPostLayout>
    </main>
  );
}