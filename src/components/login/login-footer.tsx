export function LoginFooter() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[90px] bg-black bg-opacity-5">
      <div className="h-full px-3 flex flex-col justify-center items-center">
        <div className="flex items-center gap-8 mb-2">
          <a href="#" className="text-primary text-sm font-semibold">Bantuan</a>
          <a href="#" className="text-primary text-sm font-semibold">Tentang Kami</a>
        </div>
        <p className="text-sm text-neutral-600 font-semibold">&copy; {new Date().getFullYear()}, PT. Opinia Media Teknologi</p>
      </div>
    </div>
  )
}