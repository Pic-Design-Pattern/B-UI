import { ButtonHTMLAttributes, PropsWithChildren } from "react"

export type ButtonProps = Partial<ButtonHTMLAttributes<HTMLButtonElement>> & PropsWithChildren & ButtonConfig;

export type ButtonConfig = {
    color: ButtonColor;
    size: ButtonSize;
}

export type ButtonSize = "small" | "medium" | "big";
export type ButtonColor = "default" | "primary" | "warning" | "success" | "danger";