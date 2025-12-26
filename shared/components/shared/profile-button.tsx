import { useSession } from "next-auth/react";
import { Button } from "../ui";
import Link from "next/link";
import { CircleUser, User } from "lucide-react";

export function ProfileButton({
  className,
  onSignIn,
}: {
  className?: string;
  onSignIn?: VoidFunction;
}) {
  const { data: session } = useSession();
  return (
    <div className={className}>
      {!session ? (
        <Button
          variant={"outline"}
          className="flex items-center gap-3"
          onClick={() => onSignIn?.()}
        >
          <User size={16} />
          Войти
        </Button>
      ) : (
        <Link href={"/profile"}>
          <Button>
            <CircleUser size={18} />
            Профиль
          </Button>
        </Link>
      )}
    </div>
  );
}
