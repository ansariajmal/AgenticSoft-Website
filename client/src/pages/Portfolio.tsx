import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import redesignSiteImg from "@assets/redesign_site.jpg";
import smartIoTImg  from "@assets/smart-IoT-factory.jpg";

const projects = [
  {
    title: "Healthcare AI Agent Platform",
    client: "MediCare Systems",
    category: "AI Solutions",
    duration: "6 months",
    team: "8 specialists",
    impact: "40% efficiency increase",
    description: "Comprehensive AI-powered patient management system that automates scheduling, medical record analysis, and treatment recommendations. The platform uses advanced machine learning to predict patient needs and optimize healthcare delivery.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["Python", "TensorFlow", "NLP", "Cloud AI", "React"],
    results: [
      "Reduced patient wait times by 50%",
      "Improved diagnostic accuracy by 30%",
      "Automated 80% of routine tasks",
      "Enhanced patient satisfaction scores"
    ],
    badge: "bg-brand-blue/10 text-brand-blue",
    featured: true
  },
  {
    title: "E-commerce Automation Suite",
    client: "RetailTech Global",
    category: "Process Automation",
    duration: "4 months",
    team: "6 developers",
    impact: "60% cost reduction",
    description: "Complete workflow automation solution for inventory management, order processing, and customer service operations. Integrated with multiple sales channels and provides real-time analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["Node.js", "MongoDB", "Redis", "AWS", "Vue.js"],
    results: [
      "Processed 10,000+ orders daily",
      "Reduced manual work by 90%",
      "Improved order accuracy to 99.8%",
      "24/7 automated operations"
    ],
    badge: "bg-brand-green/10 text-brand-green",
    featured: true
  },
  {
    title: "FinTech Analytics Platform",
    client: "Gulf Financial Services",
    category: "Custom Software",
    duration: "8 months",
    team: "12 experts",
    impact: "300% ROI",
    description: "Enterprise-grade financial management platform with real-time analytics, automated reporting, and comprehensive compliance features. Built for high-frequency trading and risk management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["Java", "PostgreSQL", "Apache Kafka", "Docker", "Angular"],
    results: [
      "Processing $100M+ daily transactions",
      "Real-time risk assessment",
      "Automated compliance reporting",
      "99.99% system uptime"
    ],
    badge: "bg-brand-amber/10 text-brand-amber",
    featured: true
  },
  {
    title: "Smart Manufacturing IoT",
    client: "Industrial Dynamics",
    category: "IoT & Automation",
    duration: "5 months",
    team: "7 specialists",
    impact: "45% productivity boost",
    description: "IoT-enabled manufacturing automation system with predictive maintenance, quality control, and real-time monitoring capabilities.",
    image: smartIoTImg,
    technologies: ["IoT", "Machine Learning", "Python", "InfluxDB", "Grafana"],
    results: [
      "Reduced downtime by 60%",
      "Improved quality control",
      "Predictive maintenance alerts",
      "Energy consumption optimization"
    ],
    badge: "bg-purple-100 text-purple-600",
    featured: false
  },
  {
    title: "Corporate Website Redesign",
    client: "Tech Innovations LLC",
    category: "Web Development",
    duration: "3 months",
    team: "4 designers",
    impact: "150% traffic increase",
    description: "Complete website redesign with modern UI/UX, performance optimization, and integrated CMS for content management.",
    image: redesignSiteImg,
    technologies: ["React", "Next.js", "Tailwind", "Strapi", "Vercel"],
    results: [
      "Page load speed improved by 70%",
      "Mobile responsiveness: 100%",
      "SEO ranking increased significantly",
      "User engagement up 200%"
    ],
    badge: "bg-indigo-100 text-indigo-600",
    featured: false
  },
  {
    title: "AI Customer Support Bot",
    client: "Service Excellence Co.",
    category: "AI Solutions",
    duration: "3 months",
    team: "5 AI specialists",
    impact: "80% query resolution",
    description: "Intelligent chatbot with natural language processing capabilities, integrated with CRM and knowledge base for automated customer support.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["Python", "NLP", "OpenAI", "FastAPI", "React"],
    results: [
      "24/7 customer support availability",
      "Response time under 2 seconds",
      "Customer satisfaction: 95%",
      "Support cost reduced by 60%"
    ],
    badge: "bg-brand-blue/10 text-brand-blue",
    featured: false
  }
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Happy Clients" },
  { value: "4", label: "Countries Served" },
  { value: "98%", label: "Success Rate" }
];

export default function Portfolio() {
  const featuredProjects = projects.filter(p => p.featured);
  const allProjects = projects;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-brand-blue/10 text-brand-blue mb-6">Our Portfolio</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transforming Businesses Across Industries
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Discover how we've helped companies leverage AI and cutting-edge technology to achieve remarkable results and drive growth.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-brand-blue mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting our most impactful and innovative solutions that have transformed businesses.
            </p>
          </motion.div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Badge className={project.badge}>{project.category}</Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-4 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">{project.description}</p>

                  {/* Project Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      {project.team}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {project.impact}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-brand-blue hover:bg-brand-dark">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-lg w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml;base64," + btoa(`
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
                          <rect width="800" height="500" fill="#f8fafc"/>
                          <g transform="translate(400,250)">
                            <circle cx="0" cy="-50" r="30" fill="#3b82f6" opacity="0.2"/>
                            <rect x="-60" y="-20" width="120" height="80" rx="8" fill="#3b82f6" opacity="0.1"/>
                            <text x="0" y="100" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#64748b">Healthcare AI Agent</text>
                            <text x="0" y="130" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#94a3b8">Patient Management System</text>
                          </g>
                        </svg>
                      `);
                    }}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete portfolio of successful projects across various industries and technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={`all-${project.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const title = project.title.replace(/[^a-zA-Z0-9\s]/g, '');
                      target.src = "data:image/svg+xml;base64," + btoa(`
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
                          <rect width="800" height="500" fill="#f8fafc"/>
                          <g transform="translate(400,250)">
                            <circle cx="0" cy="-30" r="20" fill="#3b82f6" opacity="0.2"/>
                            <rect x="-40" y="-10" width="80" height="40" rx="4" fill="#3b82f6" opacity="0.1"/>
                            <text x="0" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#64748b">${title}</text>
                          </g>
                        </svg>
                      `);
                    }}
                    loading="lazy"
                  />
                  <CardContent className="p-6">
                    <Badge className={project.badge}>{project.category}</Badge>
                    <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{project.client}</span>
                      <span>{project.impact}</span>
                    </div>

                    <Button variant="outline" className="w-full">
                      View Details
                      <ExternalLink className="ml-2 w-3 h-3" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's collaborate to create innovative solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-brand-blue hover:bg-brand-dark px-8 py-3">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
