import clsx from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";

type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, type = "text", ...rest }, ref) => {
    return (
      <input 
        className={clsx(
          "placeholder:text-slate-400 block w-full bg-neutral-100 py-2 px-3 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2",
          className
        )}
        ref={ref}
        type={type}
        {...rest}
      /> 
    )
  }
);

InputText.displayName = "InputText";