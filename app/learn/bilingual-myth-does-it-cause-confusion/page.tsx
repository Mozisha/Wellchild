// app/learn/bilingual-myth-does-it-cause-confusion/page.tsx
import ArticleBilingualMyth from '@/app/components/articles/ArticleBilingualMyth';
import BlogPostLayout from '@/app/components/BlogPostLayout';
import type { Metadata } from 'next';

const postInfo = {
  title: "Does Speaking Another Language at Home Cause Confusion for Kids?",
  date: "November 13, 2025",
  heroImage: "/blog-images/bilingual.png", // Using a new title image
  slug: "bilingual-myth-does-it-cause-confusion"
};

export const metadata: Metadata = {
  title: postInfo.title,
  description: "Debunking the myth that bilingualism causes confusion or language delays in children and exploring the many benefits of raising a bilingual child.",
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
        <ArticleBilingualMyth />
      </BlogPostLayout>
    </main>
  );
}