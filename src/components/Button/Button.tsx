import { ButtonConfig, ButtonProps } from "./Button.types";
import "./Button.styles.css";
import useButton from "./useButton";

const Button = (props: ButtonProps) => {
    const { configurableStyle } = useButton(props);
    const { children } = props;
    const htmlAttributes = {...props as Omit<ButtonProps, keyof ButtonConfig | "children">}
    
    return <button {...htmlAttributes} className={ configurableStyle + " btn"}> { children } </button>
}

export default Button;