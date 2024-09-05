import { PropsWithChildren } from "react";
import { DialogButtonProps } from "../../types/button.props";
import { DialogHeaderProps } from "../../types/dialog.props";
import { If } from "../condidtional";

const DialogButton = (props: DialogButtonProps) => {
    const {label, ...otherProps} = props; 

    return <button className="b-dialog-header-button"{...otherProps}>{label}</button>
}

type DialogButtonsProps = {buttons: Array<DialogButtonProps>};
const DialogButtons = ({buttons}: DialogButtonsProps) => {
    return buttons.map((prop, _) => <DialogButton key={_} {...prop} />);
}

const DialogHeader = ({title, buttons}: DialogHeaderProps) => {
    return (
        <div className="b-dialog-header">
            <div>
                <p className="px">{ title }</p>
            </div>
            <If condition={buttons != undefined}>
                <div className="b-dialog-header-buttons">
                    <DialogButtons buttons={buttons!}/>
                </div>
            </If>
        </div>
    )
    
}

export { DialogHeader as Header };