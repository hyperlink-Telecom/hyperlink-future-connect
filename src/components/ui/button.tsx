import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[hsl(217,100%,56%)] to-[hsl(203,77%,35%)] text-white hover:from-[hsl(217,100%,60%)] hover:to-[hsl(203,77%,40%)] shadow-[0_4px_16px_hsl(217,100%,56%,0.4)] hover:shadow-[0_6px_24px_hsl(217,100%,56%,0.5)] hover:scale-[1.02]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-[hsl(217,100%,56%,0.5)] bg-gradient-to-r from-[hsl(217,100%,56%,0.1)] to-[hsl(203,77%,35%,0.2)] text-white hover:from-[hsl(217,100%,56%,0.2)] hover:to-[hsl(203,77%,35%,0.3)] hover:border-[hsl(217,100%,56%)] hover:scale-[1.02]",
        secondary: "bg-gradient-to-r from-[hsl(217,100%,50%)] to-[hsl(203,77%,30%)] text-white hover:from-[hsl(217,100%,55%)] hover:to-[hsl(203,77%,35%)] shadow-[0_4px_16px_hsl(217,100%,50%,0.3)] hover:shadow-[0_6px_24px_hsl(217,100%,50%,0.4)] hover:scale-[1.02]",
        ghost: "hover:bg-[hsl(217,100%,56%,0.1)] hover:text-white",
        link: "text-[hsl(217,100%,56%)] underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-[hsl(217,100%,56%)] to-[hsl(203,77%,35%)] text-white hover:from-[hsl(217,100%,60%)] hover:to-[hsl(203,77%,40%)] shadow-[0_4px_16px_hsl(217,100%,56%,0.4)] hover:shadow-[0_6px_24px_hsl(217,100%,56%,0.5)] hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
