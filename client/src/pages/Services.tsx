import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Cog, Palette, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Brain,
    title: "AI Agentic Solutions",
    description: "Transform your business with intelligent AI agents that work autonomously to handle complex tasks, learn from interactions, and continuously adapt to your evolving business needs.",
    features: [
      "Autonomous task execution",
      "Machine learning integration",
      "Natural language processing",
      "Predictive analytics",
      "Real-time decision making"
    ],
    benefits: [
      "Reduce operational costs by 40%",
      "Increase efficiency by 60%",
      "24/7 automated operations",
      "Scalable AI infrastructure"
    ],
    color: "blue",
    gradient: "from-blue-50 to-indigo-50",
    iconBg: "bg-brand-blue"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Get tailored software solutions built from the ground up to meet your specific business requirements, ensuring perfect alignment with your goals and processes.",
    features: [
      "Full-stack development",
      "Cloud-native architecture",
      "API integration",
      "Database design",
      "Security implementation"
    ],
    benefits: [
      "Perfect fit for your business",
      "Scalable architecture",
      "Ongoing support & maintenance",
      "Future-proof technology stack"
    ],
    color: "green",
    gradient: "from-green-50 to-emerald-50",
    iconBg: "bg-brand-green"
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Streamline your operations with intelligent workflow automation that eliminates manual tasks, reduces errors, and dramatically increases operational efficiency.",
    features: [
      "Workflow optimization",
      "Business process mapping",
      "Integration with existing systems",
      "Performance monitoring",
      "Compliance automation"
    ],
    benefits: [
      "Save 20+ hours per week",
      "Reduce errors by 95%",
      "Improve compliance",
      "Real-time monitoring"
    ],
    color: "amber",
    gradient: "from-amber-50 to-yellow-50",
    iconBg: "bg-brand-amber"
  },
  {
    icon: Palette,
    title: "Website Design & Development",
    description: "Create stunning, responsive websites that combine beautiful design with powerful functionality to deliver exceptional user experiences across all devices.",
    features: [
      "Responsive design",
      "SEO optimization",
      "Performance optimization",
      "Content management",
      "E-commerce integration"
    ],
    benefits: [
      "Increase conversions by 30%",
      "Mobile-first approach",
      "Fast loading speeds",
      "Search engine visibility"
    ],
    color: "purple",
    gradient: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-600"
  }
];

export default function Services() {
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
            <Badge className="bg-brand-blue/10 text-brand-blue mb-6">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive AI & Software Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intelligent AI agents to custom software development, we deliver cutting-edge solutions that transform businesses across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <Card className={`bg-gradient-to-br ${service.gradient} border-0 p-8`}>
                      <CardContent className="p-0">
                        <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                          <Icon className="text-white w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                        <p className="text-lg text-gray-600 mb-8">{service.description}</p>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-start">
                                  <Check className="w-4 h-4 text-brand-blue mt-1 mr-2 flex-shrink-0" />
                                  <span className="text-gray-600 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Benefits</h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit) => (
                                <li key={benefit} className="flex items-start">
                                  <Check className="w-4 h-4 text-brand-green mt-1 mr-2 flex-shrink-0" />
                                  <span className="text-gray-600 text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8">
                          <Link href="/contact">
                            <Button className="bg-brand-blue hover:bg-brand-dark">
                              Get Started
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? "1555255707-c07966088b7b" :
                        index === 1 ? "1517077304055-6e89abbf09b0" :
                        index === 2 ? "1518186285589-2b7929ec2422" :
                        "1467232004584-a241ec9a6c58"
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`}
                      alt={service.title}
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your project and create a custom solution that drives growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-brand-blue hover:bg-brand-dark px-8 py-3">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
