import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageSquare, Headphones } from "lucide-react";
import ContactSection from "@/components/ContactSection";

const contactInfo = [
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["Kuwait City, Kuwait", "Business District, Floor 15"],
    color: "bg-brand-blue"
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+965 65857091 (Kuwait)", "+90 507-2454429 (Turkey)"],
    color: "bg-brand-green"
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["info@agenticsoft.com", "sales@agenticsoft.com"],
    color: "bg-brand-amber"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Sun-Thursday: 8:00 AM - 5:00 PM", "Sat: 10:00 AM - 2:00 PM"],
    color: "bg-purple-600"
  }
];

const offices = [
  {
    country: "Kuwait",
    city: "Kuwait City",
    address: "Business District, Floor 15, Block 4",
    phone: "+965 65857091",
    email: "kuwait@agenticsoft.com",
    manager: "Ahmed Al-Rashid",
    specialties: ["AI Solutions", "Business Consulting"]
  },
  {
    country: "UAE",
    city: "Dubai",
    address: "Dubai Internet City, Building 3",
 //   phone: "+971 xxxx xxxx",
    email: "dubai@agenticsoft.com",
    manager: "Sarah Chen",
    specialties: ["Custom Software", "Enterprise Solutions"]
  },
  {
    country: "Turkey",
    city: "Istanbul",
    address: "Levent Business Center, Floor 8",
    phone: "+90 507-2454429",
    email: "istanbul@agenticsoft.com",
    manager: "Mehmet Özkan",
    specialties: ["Process Automation", "IoT Solutions"]
  },
  {
    country: "Pakistan",
    city: "Karachi",
    address: "Clifton Block 4, Technology Hub",
    phone: "+92 300-2539855",
    email: "karachi@agenticsoft.com",
    manager: "Fatima Khan",
    specialties: ["Web Development", "Mobile Apps"]
  }
];

const faqs = [
  {
    question: "How do you approach new projects?",
    answer: "We start with a comprehensive consultation to understand your business needs, followed by a detailed proposal with timeline and milestones. Our agile approach ensures regular communication and iterative development."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work across various industries including healthcare, finance, e-commerce, manufacturing, and technology. Our AI solutions are adaptable to any sector requiring process automation and intelligent decision-making."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive support packages including maintenance, updates, and technical assistance. Our team is available 24/7 for critical issues and provides regular system monitoring."
  },
  {
    question: "Can you work with existing systems?",
    answer: "Absolutely! We specialize in integrating new AI solutions with existing infrastructure. Our team conducts thorough system analysis to ensure seamless integration without disrupting current operations."
  }
];

export default function Contact() {
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
            <Badge className="bg-brand-blue/10 text-brand-blue mb-6">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with AI? Get in touch with our experts across Kuwait, Turkey, UAE, and Pakistan. We're here to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-10 h-10 ${info.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <Icon className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Global Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Global Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices across four countries, we're always close to our clients. Find the office nearest to you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{office.country}</h3>
                      <Badge variant="outline">{office.city}</Badge>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-gray-400 mt-1 mr-3" />
                        <span className="text-gray-600 text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-gray-400 mr-3" />
                        <span className="text-gray-600 text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 text-gray-400 mr-3" />
                        <span className="text-gray-600 text-sm">{office.email}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-500 mb-2">Office Manager: <span className="font-medium text-gray-700">{office.manager}</span></p>
                      <div>
                        <p className="text-sm text-gray-500 mb-2">Specialties:</p>
                        <div className="flex flex-wrap gap-2">
                          {office.specialties.map((specialty) => (
                            <Badge key={specialty} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600">
              Choose the communication method that works best for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Get instant support through our live chat feature. Available during business hours.
              </p>
              <Badge className="bg-green-100 text-green-600">Online Now</Badge>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our experts. Call us during business hours for immediate assistance.
              </p>
              <Badge className="bg-blue-100 text-blue-600">24/7 Emergency</Badge>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-amber rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Consultation</h3>
              <p className="text-gray-600 mb-4">
                Schedule a video call to discuss your project in detail with our technical team.
              </p>
              <Badge className="bg-purple-100 text-purple-600">Book Now</Badge>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
