import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "Most customers start seeing measurable improvements within the first week. However, the timeline can vary based on your specific situation and how consistently you apply the system."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Absolutely! We offer a 30-day money-back guarantee. If you're not completely satisfied with your results, simply contact our support team for a full refund - no questions asked."
    },
    {
      question: "Do I need any technical skills?",
      answer: "Not at all! Our product is designed for everyone, regardless of technical background. We provide step-by-step guidance and our support team is always available to help."
    },
    {
      question: "How is this different from competitors?",
      answer: "Unlike other solutions, we focus on delivering real, measurable results backed by proven research. Plus, our 24/7 support and comprehensive guarantee make us the safest choice."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 email and chat support, comprehensive documentation, video tutorials, and access to our exclusive community of users. You're never alone on your journey."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
