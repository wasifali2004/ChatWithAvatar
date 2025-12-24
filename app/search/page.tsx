"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog-posts";
import { ProductCard } from "@/components/product-card";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Package, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const searchProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.benefits.some((benefit) =>
        benefit.toLowerCase().includes(query.toLowerCase())
      )
  );

  const searchBlogPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  const totalResults = searchProducts.length + searchBlogPosts.length;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
              Search <span className="text-primary">Results</span>
            </h1>

            {/* Search Input */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products, articles, and more..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 text-lg h-14"
              />
            </div>

            {query && (
              <p className="text-muted-foreground mt-4">
                Found {totalResults} {totalResults === 1 ? "result" : "results"}{" "}
                for "{query}"
              </p>
            )}
          </div>

          {query ? (
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">All ({totalResults})</TabsTrigger>
                <TabsTrigger value="products">
                  <Package className="w-4 h-4 mr-2" />
                  Products ({searchProducts.length})
                </TabsTrigger>
                <TabsTrigger value="blog">
                  <FileText className="w-4 h-4 mr-2" />
                  Articles ({searchBlogPosts.length})
                </TabsTrigger>
              </TabsList>

              {/* All Results */}
              <TabsContent value="all" className="mt-8">
                {totalResults === 0 ? (
                  <Card className="text-center py-20">
                    <CardContent>
                      <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h2 className="font-sans text-2xl font-semibold text-foreground mb-2">
                        No results found
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Try searching with different keywords
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-12">
                    {searchProducts.length > 0 && (
                      <div>
                        <h2 className="font-sans text-2xl font-bold text-foreground mb-6">
                          Products ({searchProducts.length})
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {searchProducts.map((product) => (
                            <ProductCard key={product.code} product={product} />
                          ))}
                        </div>
                      </div>
                    )}

                    {searchBlogPosts.length > 0 && (
                      <div>
                        <h2 className="font-sans text-2xl font-bold text-foreground mb-6">
                          Articles ({searchBlogPosts.length})
                        </h2>
                        <div className="space-y-4">
                          {searchBlogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                              <Card className="hover:shadow-lg transition-all border-border">
                                <CardContent className="p-6">
                                  <div className="flex items-start gap-4">
                                    <FileText className="w-5 h-5 text-primary shrink-0 mt-1" />
                                    <div className="flex-1">
                                      <Badge variant="outline" className="mb-2">
                                        {post.category}
                                      </Badge>
                                      <h3 className="font-semibold text-lg text-foreground mb-2 hover:text-primary transition-colors">
                                        {post.title}
                                      </h3>
                                      <p className="text-sm text-foreground/70 line-clamp-2">
                                        {post.excerpt}
                                      </p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </TabsContent>

              {/* Products Only */}
              <TabsContent value="products" className="mt-8">
                {searchProducts.length === 0 ? (
                  <Card className="text-center py-20">
                    <CardContent>
                      <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h2 className="font-sans text-2xl font-semibold text-foreground mb-2">
                        No products found
                      </h2>
                      <p className="text-muted-foreground">
                        Try searching with different keywords
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {searchProducts.map((product) => (
                      <ProductCard key={product.code} product={product} />
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Blog Only */}
              <TabsContent value="blog" className="mt-8">
                {searchBlogPosts.length === 0 ? (
                  <Card className="text-center py-20">
                    <CardContent>
                      <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h2 className="font-sans text-2xl font-semibold text-foreground mb-2">
                        No articles found
                      </h2>
                      <p className="text-muted-foreground">
                        Try searching with different keywords
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {searchBlogPosts.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <Card className="hover:shadow-lg transition-all border-border">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <FileText className="w-5 h-5 text-primary shrink-0 mt-1" />
                              <div className="flex-1">
                                <Badge variant="outline" className="mb-2">
                                  {post.category}
                                </Badge>
                                <h3 className="font-semibold text-lg text-foreground mb-2 hover:text-primary transition-colors">
                                  {post.title}
                                </h3>
                                <p className="text-sm text-foreground/70 line-clamp-2">
                                  {post.excerpt}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          ) : (
            <Card className="text-center py-20">
              <CardContent>
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="font-sans text-2xl font-semibold text-foreground mb-2">
                  Start Searching
                </h2>
                <p className="text-muted-foreground">
                  Enter a search term to find products and articles
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
