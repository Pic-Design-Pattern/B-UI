import { PropsWithChildren } from "react";

type IfProps = {
    condition: boolean;
} & PropsWithChildren

const If = ({condition, children}: IfProps) => {
    if (condition) return <>{children}</>
}