import { PropsWithChildren } from "react";

const DialogBody = ({children}: PropsWithChildren) => {
    return <div className="b-dialog-body"><div className="b-dialog-inner-body">{children}</div></div>
}

export { DialogBody as Body };