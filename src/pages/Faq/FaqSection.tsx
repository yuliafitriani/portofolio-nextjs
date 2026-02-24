import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const items = [
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime. All plans include automatic backups, 24/7 support, and unlimited team members.",
  },
  {
    value: "security",
    trigger: "Is my data secure?",
    content:
      "Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits. All data is encrypted at rest and in transit using industry-standard protocols.",
  },
  {
    value: "integration",
    trigger: "What integrations do you support?",
    content:
      "We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more. You can also build custom integrations using our REST API and webhooks.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative py-24">
      <div className="container max-w-290 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our platform.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="
                group
                rounded-2xl
                border
                backdrop-blur
                px-6
                transition-all
                duration-300
                hover:shadow-lg
                hover:-translate-y-1
                last:b-b-1
                last: border-neutral-500
                bg-neutral-500
              "
            >
              <AccordionTrigger className="py-6 text-left text-lg font-medium hover:no-underline">
                <div className="flex w-full items-center justify-between">
                  <span>{item.trigger}</span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
