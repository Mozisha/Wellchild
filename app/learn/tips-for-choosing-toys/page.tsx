// app/learn/tips-for-choosing-toys/page.tsx
import ArticleChoosingToys from '@/app/components/articles/ArticleChoosingToys';
import BlogPostLayout from '@/app/components/BlogPostLayout';
import type { Metadata } from 'next';

const postInfo = {
  title: "Tips for Choosing the Right Toy for Speech Development",
  date: "November 18, 2025",
  heroImage: "/blog-images/child-1.png", // Using a new title image
  slug: "tips-for-choosing-toys"
};

export const metadata: Metadata = {
  title: postInfo.title,
  description: "Learn how to choose the right toys to help increase your toddler's physical, cognitive, speech, and social development.",
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
        <ArticleChoosingToys />
      </BlogPostLayout>
    </main>
  );
}