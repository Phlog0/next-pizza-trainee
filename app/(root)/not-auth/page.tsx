import { InfoBlock } from "@/shared/components/shared";

export default function UnAuthorizedPage() {
  return (
    <div className="flex justify-center">
      <InfoBlock
        imgUrl="assets/lock.png"
        title="Доступ запрещен"
        text="Данную страницу могут просматривать только авторизированные пользователи"
      />
    </div>
  );
}
