import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Rocket, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="lg:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Leading AI Solutions Provider
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Business with{" "}
              <span className="text-brand-blue">AI Agentic</span> Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AgenticSoft delivers cutting-edge AI solutions, custom software development, and process automation across Kuwait, Turkey, UAE, and Pakistan. We build intelligent systems that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-brand-blue hover:bg-brand-dark text-white px-8 py-4 h-auto text-lg">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 h-auto text-lg">
                  View Portfolio
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">4</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:pl-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern office workspace with AI technology"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
