import { ButtonProps } from "@B-UI/types";

export class ButtonClassNameAdapter {
    static adaptClassName({color, size}: ButtonProps) {
        const whiteSpace = " ";
        const classColor = this.getColorClassName(color);
        const classSize = this.getSizeClassName(size);

        return "b-button" + whiteSpace + classColor + whiteSpace + classSize;
    }

    private static getColorClassName(color: string) {
        switch(color) {
            case "default": return "b-button-default";
            case "honeymoon": return "b-button-primary";
            case "green": return "b-button-green";
            case "orange": return "b-button-orange";
            case "red": return "b-button-red";
            default: return "not-defined!";
        }
    } 

    private static getSizeClassName(size: string) {
        switch(size) {
            case "big": return "b-button-large-padding";
            case "medium": return "b-button-medium-padding";
            case "small": return "b-button-small-padding";
        }
    } 
}