import { FormGroup } from "../forms/form-group";
import { InputText } from "../forms/input-text";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="h-20 bg-white border-b flex items-center py-3">
        <div className="max-w-8xl mx-auto w-full px-5 flex items-center justify-between">
          <div className="flex-none d-block w-72">
            <FormGroup isRelative>
              <span className="absolute inset-y-0 left-0 w-10 flex items-center justify-center">
                <img src="/icons/search.svg" />
              </span>
              <InputText placeholder="Cari di Opinia" className="pl-10" />
            </FormGroup>
          </div>
          <div className="flex-1">
            <img src="/assets/opinia-logo.png" className="d-block mx-auto" />
          </div>
          <div className="flex-none d-block w-80 text-right">right</div>
        </div>
      </div>
    </header>
  )
}
