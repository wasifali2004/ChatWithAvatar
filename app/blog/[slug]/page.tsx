import { use } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-posts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div
              className="text-foreground/80 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n\n")
                  .map((para) => {
                    if (para.startsWith("## ")) {
                      return `<h2 class="font-sans text-3xl font-bold text-foreground mt-12 mb-6">${para.substring(
                        3
                      )}</h2>`;
                    } else if (para.startsWith("### ")) {
                      return `<h3 class="font-sans text-2xl font-bold text-foreground mt-8 mb-4">${para.substring(
                        4
                      )}</h3>`;
                    } else if (para.startsWith("**") && para.endsWith("**")) {
                      return `<p class="font-semibold text-foreground mt-6 mb-3">${para.substring(
                        2,
                        para.length - 2
                      )}</p>`;
                    } else if (para.startsWith("- ")) {
                      const items = para
                        .split("\n")
                        .map((item) => `<li>${item.substring(2)}</li>`)
                        .join("");
                      return `<ul class="list-disc pl-6 space-y-2">${items}</ul>`;
                    } else {
                      return `<p>${para}</p>`;
                    }
                  })
                  .join(""),
              }}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="font-sans text-3xl font-bold text-foreground mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border group">
                      <div className="relative aspect-video">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
