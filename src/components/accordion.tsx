import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "¿Cómo es el código de vestimenta?",
    answer:
      "El código de vestimenta es elegante. En lo posible evitar blanco y verde.",
  },
  {
    question: "¿Se cancela si llueve?",
    answer: "No se cancela por lluvia.",
  },
  {
    question: "¿Hay comida para personas con restricción alimentaria?",
    answer: "¡Sí! Indicá tu restricción y nos ocupamos de tu menú.",
  },
  {
    question: "Tengo más preguntas...",
    answer:
      "Para preguntas más específicas, podés mandarnos un mensaje a Whatsapp.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-2xl m-auto px-2 text-xs divide-y divide-gray-300">
      {faqs.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full text-left py-3 font-semibold flex items-center gap-2"
          >
            <span className="text-lg">·</span>
            <span>{item.question}</span>
          </button>

          {openIndex === index && (
            <p className="px-4 pb-3 text-sm">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
