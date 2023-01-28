import { FormGroup } from "../forms/form-group"
import { InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement>;

function FormInput({ type = "text", placeholder, ...rest }: FormInputProps) {
  return (
    <input 
      className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 px-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1" 
      placeholder={placeholder}
      type={type} 
      {...rest}
    />
  )
}

export function LoginForm() {
  return (
    <div className="w-full max-w-6xl mx-auto lg:flex items-center">
      <div className="hidden lg:block flex-none w-[512px]">
        <img src="/img/opinia-typography.png" alt="opinia-typography-background" />
      </div>
      <div className="block lg:hidden flex-none px-4 mb-4">
        <img src="/assets/opinia-icon-logo.png" className="block mx-auto" alt="opinia-icon-logo" />
      </div>
      <div className="flex-none d-block w-full max-w-md mx-auto px-4 py-5">
        <div className="shadow-app-auth bg-white rounded-lg px-4 p-5 mb-5">
          <form action="#">
            <FormGroup className="mb-3">
              <FormInput placeholder="Email atau Nomor Telepon" />
            </FormGroup>
            <FormGroup className="mb-4">
              <FormInput placeholder="Password" type="password" />
            </FormGroup>
            <div className="flex items-center justify-between mb-5">
              <div className="inline-flex items-center">
                <input type="checkbox" id="" />
                <label className="ml-1">Ingatkan Saya</label>
              </div>
              <a href="#" className="inline-block text-primary">Lupa Kata Sandi?</a>
            </div>
            <div className="mb-4">
              <div className="w-full inline-block mt-[10px] bg-[#F5F5F5] rounded-lg px-2 cursor-pointer">
                <div className="flex w-full justify-center gap-3 py-[10.5px]">
                  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <path d="M19.885 10.218c0-.646-.053-1.295-.166-1.93h-9.087v3.658h5.204a4.393 4.393 0 0 1-1.926 2.887v2.373h3.104c1.823-1.654 2.871-4.098 2.871-6.988Z" fill="#4285F4"></path><path d="M10.632 19.5c2.598 0 4.79-.841 6.386-2.293l-3.104-2.374c-.864.58-1.98.908-3.278.908-2.514 0-4.645-1.673-5.41-3.92H2.024v2.446c1.635 3.209 4.966 5.233 8.609 5.233Z" fill="#34A853"></path><path d="M5.223 11.82a5.616 5.616 0 0 1 0-3.637V5.736h-3.2a9.39 9.39 0 0 0 0 8.531l3.2-2.447Z" fill="#FBBC04"></path><path d="M10.632 4.26c1.373-.021 2.7.488 3.696 1.424l2.75-2.713A9.331 9.331 0 0 0 10.632.5C6.989.5 3.658 2.525 2.023 5.736l3.2 2.447C5.984 5.932 8.12 4.26 10.632 4.26Z" fill="#EA4335"></path>
                  </svg>
                  <p className="truncate">Masuk dengan Google</p>
                </div>
              </div>
            </div>
            <p className="text-center text-sm mb-5">Belum Punya Akun? <a href="#" className="text-primary font-semibold">Daftar</a></p>
            <p className="text-sm">
              Dengan masuk, kamu menyetujui 
              <a target="_blank" href="/ketentuan_layanan" className="font-bold inline-block mx-1" rel="noreferrer">Ketentuan Layanan</a> 
              dan 
              <a target="_blank" href="/panduan_komunitas" className="font-bold inline-block mx-1" rel="noreferrer">Panduan Komunitas</a> 
              Opinia.
            </p>
          </form>
        </div>
        <div className="text-center">
          <a href="#" className="inline-block">
            <h6 className="font-medium mb-2 text-center">Dapatkan Aplikasi</h6>
            <img src="/img/google-play-icon.png" alt="google-play-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}