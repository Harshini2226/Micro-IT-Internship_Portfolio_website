import React from "react";
import Layout from "@/components/Layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}
const blogPosts: BlogPost[] = [{
  id: 1,
  title: "10 Essential UI/UX Design Principles for Better User Experience",
  excerpt: "Learn the key principles that can drastically improve your website's user experience and engagement.",
  date: "May 10, 2023",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  category: "Design",
  readTime: "5 min read"
}, {
  id: 2,
  title: "The Future of Web Development: Trends to Watch in 2023",
  excerpt: "Stay ahead of the curve with these emerging trends that are shaping the future of web development.",
  date: "April 22, 2023",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  category: "Development",
  readTime: "7 min read"
}, {
  id: 3,
  title: "How to Optimize Your Website for Better Performance",
  excerpt: "Simple techniques to make your website faster, more responsive, and provide a better user experience.",
  date: "March 15, 2023",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  category: "Performance",
  readTime: "6 min read"
}, {
  id: 4,
  title: "Creating Accessible Websites: A Comprehensive Guide",
  excerpt: "Learn how to make your websites accessible to all users, including those with disabilities.",
  date: "February 28, 2023",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  category: "Accessibility",
  readTime: "8 min read"
}, {
  id: 5,
  title: "Responsive Design Best Practices for Modern Websites",
  excerpt: "Ensure your website looks great on all devices with these responsive design techniques.",
  date: "January 17, 2023",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  category: "Design",
  readTime: "5 min read"
}, {
  id: 6,
  title: "Getting Started with React: A Beginner's Guide",
  excerpt: "A step-by-step introduction to building modern web applications with React.",
  date: "December 5, 2022",
  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  category: "Development",
  readTime: "10 min read"
}];
const Blog = () => {
  return <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Insights, tutorials, and thoughts on web development, design, and technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <Badge>{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <Link to={`/blog/${post.id}`} className="text-primary font-medium hover:underline flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="bg-secondary text-foreground px-6 py-3 rounded-md hover:bg-secondary/80 transition-colors">Load More Articles</button>
        </div>
      </div>
    </Layout>;
};
export default Blog;