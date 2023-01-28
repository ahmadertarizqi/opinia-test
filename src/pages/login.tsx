import { Link } from "react-router-dom";
import { FormGroup } from "~/components/forms/form-group";
import { InputText } from "~/components/forms/input-text";
import { LoginFooter } from "~/components/login/login-footer";
import { LoginForm } from "~/components/login/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-100 flex flex-col">
      <main className="flex-1 flex">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <img src="/img/chat-background.png" className="w-full h-full object-cover" alt="chat-background" />
        </div>
        <div className="relative w-full pb-[90px] flex items-center">
          <LoginForm />
        </div>
        <LoginFooter />
      </main>
    </div>
  )
}