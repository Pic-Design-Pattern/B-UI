import { ReactNode } from "react"

type DialogProps = {
    children: ReactNode;
};

const DialogRoot = (props: DialogProps) => {
    return (
        <div className="b-dialog">
            { props.children }
        </div>
    )
};

export { DialogRoot as Root };