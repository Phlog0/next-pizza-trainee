import { X } from "lucide-react";
import { Button } from "../../ui";

export function ClearButton({ onClick }: { onClick: VoidFunction }) {
  return (
    <Button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100 active:-translate-y-1/3"
    >
      <X />
    </Button>
  );
}
