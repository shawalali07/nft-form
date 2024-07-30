import { cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-primary", "hover:bg-neutral-800", "text-white"],
      ghost: ["hover:bg-gray-900"],
      dark: [
        "bg-secondary-dark",
        "hover:bg-secondary-dark-hover",
        "text-secondary",
      ],
      light: [
        "bg-secondary-light",
        "hover:bg-secondary-light-hover",
        "text-black",
      ],
      secondary: ["bg-[#E11A22]", "hover:bg-primary-light-hover", "text-white"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export function Button({
  variant,
  size,
  className,
  children,
  style,
  ...props
}) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size, className }), className)}
      style={{
        boxShadow:
          variant === "light" || variant === "secondary"
            ? "4px 4px 30px 0px #0080B440"
            : "none",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
