'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TextAnimate } from "@/components/ui/text-animate"
import { RoughNotation } from "react-rough-notation"
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { useContactPopup } from "@/components/ContactPopup"
import faqs from '@/consts/faqs'

function FAQ() {
  const { openPopup, ContactPopup } = useContactPopup()
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50/20 via-white to-yellow-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-100/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-blue-600 mb-6"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wider uppercase">Frequently Asked Questions</span>
            <HelpCircle className="w-5 h-5" />
          </motion.div>

          <div className="text-3xl md:text-5xl font-bold text-black mb-6 flex flex-wrap justify-center items-center gap-2">
            <TextAnimate
              animation="slideUp"
              by="word"
            >
              Got
            </TextAnimate>
            <RoughNotation
              type="underline"
              show={true}
              color="#eab308"
              animationDelay={1000}
            >
              <span className="text-black mx-3">Questions?</span>
            </RoughNotation>
            <TextAnimate
              animation="slideUp"
              by="word"
            >
              We've Got Answers
            </TextAnimate>
          </div>

          <TextAnimate
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            animation="slideUp"
            by="word"
          >
            Find answers to common questions about our services, process, and how we can help bring your project to life.
          </TextAnimate>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-black pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 p-1 rounded-full transition-all duration-300 ${openFAQ === faq.id
                  ? 'bg-blue-100 text-blue-600 rotate-180'
                  : 'bg-yellow-100 text-yellow-600'
                  }`}>
                  {openFAQ === faq.id ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-cyan-50 to-yellow-50 rounded-2xl border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-black mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help you with any questions about your project.
          </p>
          <button
            onClick={openPopup}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <HelpCircle className="w-5 h-5" />
            Get in Touch
          </button>
        </motion.div>
      </div>
      <ContactPopup />
    </section>
  )
}

export default FAQ
