import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of surfaces can this steam cleaner be used on?",
      answer: "This steam cleaner is multipurpose and safe for use on a wide variety of surfaces, including sinks, stoves, countertops, tiles, windows, mattresses, fabrics, toys, and more. It's suitable for both hard and soft surfaces."
    },
    {
      question: "Is this steam cleaner safe to use around children and pets?",
      answer: "Yes, it features a child lock and safety cap to prevent accidental opening. Since it operates without harmful chemicals or fumes, it's safe for use in homes with kids and pets."
    },
    {
      question: "What accessories are included with the product?",
      answer: "The cleaner comes with 8 accessories: a measuring cup, funnel, window cleaning tool, round nylon brush, upholstery tool, standard nozzle, towel sleeve, bent nozzle, and a 22.4-inch flexible hose with gun nozzle for versatile cleaning."
    },
    {
      question: "Does this steam cleaner require any chemical detergents?",
      answer: "No, it uses only water to generate high-pressure steam. It provides a 100% natural, chemical-free cleaning experience, making it safe for children, pets, and allergy-sensitive households."
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
