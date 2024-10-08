import { ButtonColor, ButtonProps, ButtonSize } from "./Button.types";

const colorAdapter = (buttonSize: ButtonColor) => {
    switch (buttonSize) {
        case "default": return "bg-generics-default";
        case "primary": return "bg-primary";
        case "warning": return "bg-warning";
        case "danger": return "bg-danger";
        case "success": return "bg-success";
    }
}

const sizeAdapter = (buttonSize: ButtonSize) => {
    switch (buttonSize) {
        case "small": return "p-2.5";
        case "medium": return "p-4";
        case "big": return "p-5";
    }
}

const useButton = (props: ButtonProps) => {
    const configurableStyle = sizeAdapter(props.size) + " " + colorAdapter(props.color);

    return {
        configurableStyle
    }
}

export default useButton;