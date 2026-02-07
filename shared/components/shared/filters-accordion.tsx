import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";
import { PropsWithChildren } from "react";
export function FiltersAccordion({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <Accordion
      type="multiple"
      className={cn("bg-orange-100/15 p-4", className)}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Фильтры</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
