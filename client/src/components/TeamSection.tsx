import { motion } from "framer-motion";
import ajmalImage from "@assets/ajmal.jpg";
import sadafImage from "@assets/sadaf-face.png";
import nohaImage from "@assets/noha.png";
import ahmdImage from "@assets/ahad_face.jpg";

const teamMembers = [
  {
    name: "Muhammad Ajmal Ansari",
    role: "CEO & Co-Founder",
    location: "Kuwait Office",
    image: ajmalImage,
  },
  {
    name: "Sadaf Gul",
    role: "AI Solutions Director & Co-Founder",
    location: "UAE Office",
    image: sadafImage,
  },
  {
    name: "Noha",
    role: "Head of Sales Marketing",
    location: "Turkey Office",
    image: nohaImage,
  },
  {
    name: "Ahad Ahmed",
    role: "Lead Developer",
    location: "Pakistan Office",
    image: ahmdImage,
  },
];

const stats = [
  { value: "50+", label: "Expert Developers" },
  { value: "15+", label: "AI Specialists" },
  { value: "100+", label: "Certifications" },
  { value: "12+", label: "Languages Supported" },
];

export default function TeamSection() {
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented professionals who bring innovative AI solutions
            and cutting-edge software development to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-brand-blue text-sm font-medium mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-xs">{member.location}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-brand-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
