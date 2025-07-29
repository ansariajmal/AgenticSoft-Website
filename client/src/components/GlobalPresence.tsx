import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building } from "lucide-react";

const offices = [
  {
    country: "Kuwait",
    description: "Middle East Headquarters",
    city: "Kuwait City, Kuwait",
    phone: "+965 65857091",
    gradient: "from-brand-blue to-brand-dark",
  },
  {
    country: "Turkey",
    description: "European Operations",
    city: "Istanbul, Turkey",
    phone: "+90 507-2454429",
    gradient: "from-brand-green to-emerald-600",
  },
  {
    country: "UAE",
    description: "Regional Hub",
    city: "Dubai, UAE",
    //phone: "+971 xxxx xxxx",
    gradient: "from-brand-amber to-orange-500",
  },
  {
    country: "Pakistan",
    description: "Development Center",
    city: "Karachi, Pakistan",
    phone: "+92 300-2539855",
    gradient: "from-purple-600 to-violet-600",
  },
];

export default function GlobalPresence() {
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
            Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With offices across four countries, we provide localized expertise
            while maintaining global standards of excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {offices.map((office, index) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 border border-gray-200 hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${office.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Building className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {office.country}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {office.description}
                  </p>
                  <div className="text-xs text-gray-500">
                    <p>{office.city}</p>
                    <p>{office.phone}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Global Business Network Visualization */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1526378787940-576a539ba69d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400"
            alt="Global business network with world connections"
            className="rounded-xl w-full h-64 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
