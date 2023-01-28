import clsx from "clsx";
import { ButtonHTMLAttributes } from "react"

type ButtonVariants = "primary" | "secondary" | "success" | "danger";
type ButtonSizes = "sm" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
}

export function Button({ type = "button", variant, size, className, ...rest }: ButtonProps) {
  const baseStyles = "focus:outline-none focus:ring leading-normal rounded-md";
  
  const variantStyles = (variantItem?: ButtonVariants) => {
    switch(variantItem) {
      case "primary": {
        return "bg-primary focus:ring-primary-light text-white";
      }
      case "secondary": {
        return "bg-secondary focus:ring-secondary-light text-white";
      }
      case "success": {
        return "bg-emerald-500 focus:ring-emerald-200 text-white";
      }
      case "danger": {
        return "bg-red-500 focus:ring-red-200 text-white";
      }
      default: {
        return "bg-white focus:ring-primary-light text-primary";
      }
    }
  };

  const sizeStyles = (sizeItem?: ButtonSizes) => {
    switch(sizeItem) {
      case "sm": {
        return "text-sm py-1 px-2";
      }
      case "lg": {
        return "text-lg py-3 px-4";
      }
      default: {
        return "text-base py-2 px-3";
      }
    }
  }

  return (
    <button 
      className={clsx(baseStyles, variantStyles(variant), sizeStyles(size), className)}
      type={type} 
      {...rest}
    >
      Save Changes
    </button>
  )
}
