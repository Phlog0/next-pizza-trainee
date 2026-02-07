export interface VerificationUserTemplateProps {
  code: string;
}

export function VerificationUserTemplate({
  code,
}: VerificationUserTemplateProps) {
  return `
    <div>
      <h1>Ваш код:</h1>
      <div>
        ${code}
      </div>
      <p><a href='http://localhost:3000/api/auth/verify?code=${code}'>Подтвердить регистрацию</a></p>
    </div>
    `;
}
