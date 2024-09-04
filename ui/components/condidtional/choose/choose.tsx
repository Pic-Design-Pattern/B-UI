type ChooseProps = {
    children: React.JSX.Element[];
};

const validateChooseComponent = (ifElementsLenght: number, elseElementsLenght: number) => {
    if (ifElementsLenght != 1) {
        throw new Error(`There is a inconsistence in [If] components present in [Choose]. Choose component only supports 1 If element inside of it, you have: ${ifElementsLenght}`);   
    }
    if (elseElementsLenght != 1) {
        throw new Error(`There is a inconsistence in [Else] components present in [Choose]. Choose component only supports 1 Else element inside of it, you have: ${elseElementsLenght}`);   
    }
}

const Choose = ({ children }: ChooseProps) => {
    const ifElements = children.filter(child => child.type.name == "If").length;
    const elseElements = children.filter(child => child.type.name == "Else").length;

    validateChooseComponent(ifElements, elseElements);

    return children.filter(child => {
        //Component Types
        const isIfComponent = child.type.name == "If";
        const isElseComponent = child.type.name == "Else";

        //Components Conditions
        const isIfConditionTrue = isIfComponent && child.props.condition; 
        const isIfConditionFalse = isElseComponent && !child.props.condition;

        //Returns
        if (isIfConditionTrue) return <>{children}</>;
        if (isIfConditionFalse) return <>{children}</>;
    }).at(0);
};

export {Choose};