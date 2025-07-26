import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    title: "Machine Learning Integration",
    description: "Advanced ML algorithms that learn and improve from your data."
  },
  {
    title: "Natural Language Processing",
    description: "AI agents that understand and process human language naturally."
  },
  {
    title: "Cloud-Native Architecture",
    description: "Scalable, secure, and reliable cloud-based solutions."
  }
];

export default function TechnologyShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our solutions leverage the latest in artificial intelligence, machine learning, and automation technologies to deliver unprecedented business value.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="AI technology visualization with neural networks"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
