export type ButtonProps = {
    color: "green" | "default" | "honeymoon" | "orange" | "red";
    size: "small" | "medium" | "big";
    label: string;
} & Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>