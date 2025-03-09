import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center gap-4 justify-between py-8">
        <div className="flex gap-4">
          <Image src="/logo.png" width={35} height={35} alt="Logo" />
          <div>
            <h1 className="text-2xl uppercase font-black">next pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              Вкусней уже некуда
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant={"outline"} className="flex items-center gap-3">
            <User size={16} />
            Войти
          </Button>

          <Button className="relative group">
            <b>520 Р.</b>
            <span className="h-full w-[1px] bg-white/30 mx-3"></span>
            <div className="relative flex items-center gap-3 transition duration-300 group-hover:opacity-0">
              <ShoppingCart size={16} className="relative" strokeWidth={2} />
              <b>3</b>
            </div>
            <ArrowRight className="w-5 right-5 absolute transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100" />
          </Button>
        </div>
      </Container>
    </header>
  );
}
