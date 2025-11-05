// app/learn/early-communication-milestones/page.tsx

import ArticleEarlyCommunicationMilestones from '@/app/components/articles/ArticleEarlyCommunicationMilestones';
import BlogPostLayout from '@/app/components/BlogPostLayout';
import type { Metadata } from 'next';

const postInfo = {
  title: "Early Communication Milestones and When to Consider an Autism Evaluation",
  date: "October 10, 2025",
  heroImage: "/baby.jpg", // Using a different title image
  slug: "early-communication-milestones"
};

export const metadata: Metadata = {
  title: postInfo.title,
  description: "A guide to understanding early speech and communication milestones and recognizing when to seek an autism evaluation for your child.",
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
        <ArticleEarlyCommunicationMilestones />
      </BlogPostLayout>
    </main>
  );
}