import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Title } from "./title";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";

export function TopBar({ className }: { className?: string }) {
  //липкая шапка уже готова!
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
}
