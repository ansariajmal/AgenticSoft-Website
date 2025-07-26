import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Healthcare AI Agent",
    description: "Intelligent patient management system that automates scheduling, medical record analysis, and treatment recommendations.",
    image: "https://pixabay.com/get/gc5229cd134b0f373d65bb77a0226bc27632566fccb6a22a8efc68f25f73678c4763729581c96aaefa49f25d82e5d592b605b0594a7f2ad4fde1836894b3392c0_1280.jpg",
    category: "AI Solutions",
    badge: "bg-brand-blue/10 text-brand-blue",
    linkColor: "text-brand-blue hover:text-brand-dark"
  },
  {
    title: "E-commerce Automation",
    description: "Complete workflow automation for inventory management, order processing, and customer service operations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    category: "Automation",
    badge: "bg-brand-green/10 text-brand-green",
    linkColor: "text-brand-green hover:text-green-700"
  },
  {
    title: "FinTech Platform",
    description: "Custom financial management platform with real-time analytics, automated reporting, and compliance features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    category: "Custom Software",
    badge: "bg-brand-amber/10 text-brand-amber",
    linkColor: "text-brand-amber hover:text-yellow-700"
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with cutting-edge AI and software solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <Badge className={project.badge}>{project.category}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <a href="#" className={`${project.linkColor} font-medium text-sm transition-colors inline-flex items-center`}>
                    View Case Study <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button className="bg-brand-blue hover:bg-brand-dark text-white px-8 py-3">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
