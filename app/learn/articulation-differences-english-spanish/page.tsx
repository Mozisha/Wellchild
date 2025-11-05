// app/learn/articulation-differences-english-spanish/page.tsx
import ArticleArticulationDifferences from '@/app/components/articles/ArticleArticulationDifferences';
import BlogPostLayout from '@/app/components/BlogPostLayout';
import type { Metadata } from 'next';

const postInfo = {
  title: "Common Articulation Differences Between English and Spanish",
  date: "November 15, 2025",
  heroImage: "/blog-images/hello.png", // Using a new title image
  slug: "articulation-differences-english-spanish"
};

export const metadata: Metadata = {
  title: postInfo.title,
  description: "A guide for parents and professionals to differentiate between natural language variation and a potential language disorder in bilingual children.",
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
        <ArticleArticulationDifferences />
      </BlogPostLayout>
    </main>
  );
}