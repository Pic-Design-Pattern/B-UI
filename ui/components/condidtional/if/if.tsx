import { ReactNode } from "react";

type IfProps = {
    condition: boolean;
    children: ReactNode
};

const If = ({condition, children}: IfProps) => {
    if (condition) return <>{children}</>
}

export { If }; 