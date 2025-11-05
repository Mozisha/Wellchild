
import ArticleEarlySignsOfAutism from '@/app/components/articles/ArticleEarlySignsOfAutism';
import BlogPostLayout from '@/app/components/BlogPostLayout';
import type { Metadata } from 'next';

const postInfo = {
  title: "Early Signs of Autism: A Parent’s Guide to Action",
  date: "October 12, 2025",
  heroImage: "/smiling-mom.jpg",
  slug: "early-signs-of-autism-a-parents-guide"
};

export const metadata: Metadata = {
  title: postInfo.title,
  description: `A parent's guide to understanding the early signs of Autism Spectrum Disorder (ASD) and when to seek an evaluation.`,
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
        <ArticleEarlySignsOfAutism />
      </BlogPostLayout>
    </main>
  );
}