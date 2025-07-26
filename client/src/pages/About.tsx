import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users, Globe, Lightbulb } from "lucide-react";
import GlobalPresence from "@/components/GlobalPresence";
import TeamSection from "@/components/TeamSection";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with AI and software development."
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering solutions that drive real business results."
  },
  {
    icon: Globe,
    title: "Global Excellence",
    description: "With offices across four countries, we bring global expertise to every project."
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "We stay ahead of technology trends to provide cutting-edge solutions."
  }
];

const milestones = [
  { year: "2016", title: "Company Founded", description: "Started with a vision to democratize AI technology" },
  { year: "2018", title: "First International Office", description: "Expanded to Turkey, marking our global presence" },
  { year: "2020", title: "AI Breakthrough", description: "Launched our first autonomous AI agent platform" },
  { year: "2022", title: "500+ Projects", description: "Reached milestone of 500 successful project deliveries" },
  { year: "2024", title: "Industry Leader", description: "Recognized as leading AI solutions provider in the region" }
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-brand-blue/10 text-brand-blue mb-6">About AgenticSoft</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Building the Future with AI Innovation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Since 2016, AgenticSoft has been at the forefront of AI innovation, helping businesses across Kuwait, Turkey, UAE, and Pakistan transform their operations with intelligent software solutions.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">8+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">500+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue">4</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="AgenticSoft team collaboration"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 p-8 h-full">
                <CardContent className="p-0">
                  <Target className="w-12 h-12 text-brand-blue mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600 text-lg">
                    To democratize artificial intelligence by making advanced AI solutions accessible to businesses of all sizes, enabling them to automate processes, make data-driven decisions, and achieve unprecedented growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 p-8 h-full">
                <CardContent className="p-0">
                  <Eye className="w-12 h-12 text-brand-green mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-600 text-lg">
                    To be the leading AI solutions provider globally, recognized for our innovation, expertise, and commitment to helping businesses thrive in the digital age through intelligent automation and cutting-edge technology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we approach every project and client relationship.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white p-6 text-center h-full">
                    <CardContent className="p-0">
                      <Icon className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From a small startup to a global AI solutions provider, here are the key milestones in our journey.
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mr-8">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlobalPresence />
      <TeamSection />
    </div>
  );
}
