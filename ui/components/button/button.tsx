import { ButtonProps } from "@B-UI/types";
import { ButtonClassNameAdapter } from "./button-classname.adapter";

const Button: React.FC<ButtonProps> = (props) => {

    const { color, size, label , ...buttonProps } = props;
    const buttonClassFormat = ButtonClassNameAdapter.adaptClassName(props);

    return (
        <>
            <button
                {...buttonProps}
                className={buttonClassFormat}
            >
                { label }
            </button>
        </>
    )
} 

export { Button };