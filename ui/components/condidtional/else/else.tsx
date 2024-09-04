import { ReactNode } from "react";

type ElseProps = {
    children: ReactNode
};

const Else = ({children}: ElseProps) => {
    return <>{children}</>
}

export { Else }; 