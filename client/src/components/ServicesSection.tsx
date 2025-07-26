import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Cog, Palette, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Agentic Solutions",
    description: "Intelligent AI agents that autonomously handle complex tasks, learn from interactions, and adapt to your business needs.",
    color: "blue",
    gradient: "from-blue-50 to-indigo-50",
    iconBg: "bg-brand-blue",
    linkColor: "text-brand-blue hover:text-brand-dark"
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions built from the ground up to meet your specific business requirements and goals.",
    color: "green",
    gradient: "from-green-50 to-emerald-50",
    iconBg: "bg-brand-green",
    linkColor: "text-brand-green hover:text-green-700"
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Streamline operations with intelligent workflow automation that reduces manual work and increases efficiency.",
    color: "amber",
    gradient: "from-amber-50 to-yellow-50",
    iconBg: "bg-brand-amber",
    linkColor: "text-brand-amber hover:text-yellow-700"
  },
  {
    icon: Palette,
    title: "Website Design",
    description: "Modern, responsive websites that combine beautiful design with powerful functionality and user experience.",
    color: "purple",
    gradient: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-600",
    linkColor: "text-purple-600 hover:text-purple-700"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive software solutions that leverage cutting-edge AI technology to transform your business operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-gradient-to-br ${service.gradient} p-8 hover:shadow-lg transition-all duration-300 border-0 h-full`}>
                  <CardContent className="p-0">
                    <div className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                      <Icon className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <a href="#" className={`${service.linkColor} font-medium transition-colors inline-flex items-center`}>
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
