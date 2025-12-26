import { cn } from "@/lib/utils";
import { Title } from "./title";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowLeft } from "lucide-react";

export function InfoBlock({
  imgUrl,
  className,
  text,
  title,
}: {
  title: string;
  imgUrl: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-12 justify-between max-w-96")}>
      <div className="flex flex-col gap-6">
        <div>
          <Title text={title} />
          <p className="text-gray-400">{text}</p>
        </div>
        <div className="flex">
          <Link href="/">
            <Button>
              <ArrowLeft /> На главную
            </Button>
          </Link>
          <a href="">
            <Button variant={"outline"} className="bg-gray-400 hover:bg-white">
              Обновить
            </Button>
          </a>
        </div>
      </div>
      <img src={imgUrl} alt={title} />
    </div>
  );
}
