import { FormGroup } from "~/components/forms/form-group";
import { InputText } from "~/components/forms/input-text";

export function ChatListForm() {
  return (
    <div className="flex-none h-14 border-b flex items-center px-3">
      <FormGroup className="w-full" isRelative>
        <InputText placeholder="Cari teman atau pengikut" className="pr-10" />
        <span className="absolute inset-y-0 right-0 w-10 flex items-center justify-center">
          <img src="/icons/search.svg" />
        </span>
      </FormGroup>
    </div>
  )
}