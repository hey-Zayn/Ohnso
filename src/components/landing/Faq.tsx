import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Ohnso?",
    answer: "Ohnso LLC is a specialized consultancy providing expert product research, strategic sourcing, and performance-driven PPC management to help e-commerce businesses scale efficiently and profitably.",
  },
  {
    question: "How does your product research service work?",
    answer: "Our team uses advanced analytics and market trend analysis to uncover high-potential products. We provide you with a comprehensive report including competition analysis, profitability forecasts, and supplier recommendations.",
  },
  {
    question: "Can you help source products from overseas?",
    answer: "Absolutely. Our global sourcing experts have a vast network of verified manufacturers. We handle negotiation, quality control, and logistics to ensure a seamless supply chain for your business.",
  },
  {
    question: "What platforms do you manage PPC campaigns on?",
    answer: "We specialize in managing and optimizing PPC campaigns across major platforms like Amazon, Google Ads, and social media channels to maximize your advertising spend and drive conversions.",
  },
  {
    question: "How do you ensure the quality of sourced products?",
    answer: "We have a rigorous vetting process for all suppliers and conduct on-site inspections and quality checks. Our commitment is to source only top-tier products that align with your brand's standards.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
            Have questions about our Product Research, Sourcing, or PPC services? We have answers.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-headline text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
