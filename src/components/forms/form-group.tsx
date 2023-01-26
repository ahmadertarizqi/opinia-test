import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";

interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  isRelative?: boolean;
}

export const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, children, isRelative }) => {
    return (
      <div className={clsx(
          "rounded-full",
          isRelative && "relative",
          className
        )}
      >
        {children}
      </div>
    )
  }
);

FormGroup.displayName = "FormGroup";
