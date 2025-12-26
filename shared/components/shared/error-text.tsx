import { cn } from "@/lib/utils";

export function ErrorText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return <span className={cn("text-red-500 text-sm", className)}>{text}</span>;
}
