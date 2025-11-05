// app/learn/how-to-get-your-child-talking/page.tsx
import ArticleGetYourChildTalking from '@/app/components/articles/ArticleGetYourChildTalking';
import BlogPostLayout from '@/app/components/BlogPostLayout';
import type { Metadata } from 'next';

const postInfo = {
  title: "How to Get Your Child Talking",
  date: "October 14, 2025",
  heroImage: "/blog-images/happy-baby.png", 
  slug: "how-to-get-your-child-talking"
};

export const metadata: Metadata = {
  title: postInfo.title,
  description: "Practical parenting tips and daily activities to help encourage speech and language development in toddlers and children.",
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
        <ArticleGetYourChildTalking />
      </BlogPostLayout>
    </main>
  );
}