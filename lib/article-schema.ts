import type { BlogPost } from "./blog-posts"

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: "Devasye Sachdeva" },
    publisher: {
      "@type": "Organization",
      name: "Savri",
      url: "https://savri.co.in",
      logo: {
        "@type": "ImageObject",
        url: "https://savri.co.in/savri-logo-dark.png",
      },
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: `https://savri.co.in/blog/${post.slug}`,
    image: "https://savri.co.in/images/hero-food.jpg",
    keywords: post.keywords.join(", "),
    inLanguage: "en-IN",
  }
}
