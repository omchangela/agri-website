import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FAQ = () => {
  // State to track which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // FAQs data
  const faqs = [
    {
      question: "What are the advantages of a power tiller?",
      answer: "A power tiller is versatile and cost-effective for soil preparation, weeding, and plowing. It increases efficiency and reduces manual labor.",
    },
    {
      question: "How do I make purchases with a credit card?",
      answer: "To purchase with a credit card, provide your card details during checkout, verify the transaction, and confirm the payment.",
    },
    {
      question: "How does a power tiller machine work?",
      answer: "A power tiller uses rotating blades powered by an engine to loosen and mix the soil efficiently, making it ready for cultivation.",
    },
    {
      question: "What is the function of a tiller?",
      answer: "A tiller is used for soil preparation, including breaking, loosening, and aerating the soil for planting crops.",
    },
    {
      question: "How many gears does a power tiller have?",
      answer: "Most power tillers come with 2 to 4 forward gears and 1 reverse gear for different speeds and applications.",
    },
    {
      question: "What are tiller blades?",
      answer: "Tiller blades are rotating blades attached to the tiller, designed to break and turn the soil for agricultural purposes.",
    },
    {
      question: "What is the working capacity of a power tiller?",
      answer: "The working capacity of a power tiller typically ranges from 1 to 1.5 acres per hour, depending on the model and soil conditions.",
    },
  ];

  // Toggle function to show/hide answers
  const toggleFAQ = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <Navbar />
      <h1 className="text-3xl font-semibold text-left my-8 mx-10">FAQ`s</h1>
      <div className="space-y-4 mx-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 pb-2">
            {/* Question Section */}
            <div
              className={`flex justify-between items-center cursor-pointer p-3 rounded-md ${
                expandedIndex === index ? "bg-[#0B904E] text-white" : "bg-white text-black"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <button
                className={`text-xl font-bold transform ${
                  expandedIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </button>
            </div>

            {/* Answer Section */}
            {expandedIndex === index && (
              <p className="text-gray-600 mt-2 ml-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
