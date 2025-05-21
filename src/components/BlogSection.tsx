
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of Automated Testing in 2025",
      date: "May 15, 2025",
      excerpt: "Exploring upcoming trends in test automation and how AI is transforming the QA landscape.",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      link: "#",
      readTime: "7 min read"
    },
    {
      title: "Building Scalable API Testing Frameworks",
      date: "April 22, 2025",
      excerpt: "A comprehensive guide to creating robust API testing frameworks that scale with your application.",
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      link: "#",
      readTime: "9 min read"
    },
    {
      title: "Best Practices for Test Automation in CI/CD Pipelines",
      date: "March 10, 2025",
      excerpt: "Learn how to effectively integrate your automated tests into continuous integration and delivery workflows.",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      link: "#",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-blue-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Blog & Insights
          </span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
          Thoughts, learnings, and perspectives on quality assurance, automation testing, and software development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="bg-white dark:bg-slate-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100 dark:border-blue-900"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <CardDescription>{post.date}</CardDescription>
                  <CardDescription>{post.readTime}</CardDescription>
                </div>
                <CardTitle className="text-xl text-blue-700 dark:text-blue-400">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-0" asChild>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
