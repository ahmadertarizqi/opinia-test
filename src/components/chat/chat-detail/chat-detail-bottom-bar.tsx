import { FormGroup } from "~/components/forms/form-group";
import { InputText } from "~/components/forms/input-text";

export function ChatDetailBottomBar() {
  return (
    <div className="flex-none block h-[60px]">
      <div className="px-3 h-full flex gap-1 items-stretch border-t">
        <div className="flex-none block w-8">
          <span className="w-full h-full flex items-center justify-center cursor-pointer">
            <img src="/icons/camera-outlined.svg" className="w-6 h-6" alt="icon-camera-action" />
          </span>
        </div>
        <div className="flex-none block w-8">
          <span className="w-full h-full flex items-center justify-center cursor-pointer">
            <img src="/icons/attachment.svg" className="w-6 h-6" alt="icon-attachment-action" />
          </span>
        </div>
        <div className="flex-1 flex items-center">
          <FormGroup className="w-full flex gap-2">
            <InputText placeholder="Tulis pesan" />
            <span className="flex-none w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer">
              <img src="/icons/paper-plane.svg" className="w-6 h-6" alt="icon-paper-plane" />
            </span>
          </FormGroup>
        </div>
      </div>
    </div>
  )
}