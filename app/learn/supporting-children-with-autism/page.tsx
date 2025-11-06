
import ArticleSupportingChildrenWithAutism from '@/app/components/articles/ArticleSupportingChildrenWithAutism';
import BlogPostLayout from '@/app/components/BlogPostLayout';
import type { Metadata } from 'next';

const postInfo = {
  title: "Supporting Children with Autism: How ABA Therapy Helps Children Thrive",
  date: "October 11, 2025",
  heroImage: "/blog-images/support.png", 
  slug: "supporting-children-with-autism"
};

export const metadata: Metadata = {
  title: postInfo.title,
  description: "Learn how early evaluations and Applied Behavior Analysis (ABA) therapy can make a lasting difference for children with Autism (ASD).",
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
        <ArticleSupportingChildrenWithAutism />
      </BlogPostLayout>
    </main>
  );
}