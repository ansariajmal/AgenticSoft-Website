import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ahmed Al-Rashid",
    role: "CEO & Co-Founder",
    location: "Kuwait Office",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Sarah Chen",
    role: "AI Solutions Director",
    location: "UAE Office",
    image: "https://pixabay.com/get/g7284c38474a9a1bac9ffd0a2118cba07a796d2094eedda2064e02e3c6c460ee4534bc16a1b9c0b423f54f0d63400a77f8994c4023bf8033ad2e1fb6bf72ae1d7_1280.jpg"
  },
  {
    name: "Mehmet Özkan",
    role: "Chief Technology Officer",
    location: "Turkey Office",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Fatima Khan",
    role: "Lead Developer",
    location: "Pakistan Office",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  }
];

const stats = [
  { value: "50+", label: "Expert Developers" },
  { value: "15+", label: "AI Specialists" },
  { value: "100+", label: "Certifications" },
  { value: "12+", label: "Languages Supported" }
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented professionals who bring innovative AI solutions and cutting-edge software development to life.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-brand-blue text-sm font-medium mb-2">{member.role}</p>
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
                <div className="text-3xl font-bold text-brand-blue mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
