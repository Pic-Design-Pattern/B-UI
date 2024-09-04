type ChooseProps = {
    children: Array<React.JSX.Element>
};

const Choose = ({children}: ChooseProps) => {
    const hasElse = children[0].type.name === "Else";
    if (!children.length || !hasElse) {
        throw new Error("Choose component must have an { Else } component");
    }

    return children.filter(child => {
        const isIfComponent: boolean = child.type.name === "If";
        const isElseComponent: boolean = child.type.name === "Else";
        const condition: boolean = child.props.condition;

        if (isIfComponent && child.props.condition) {
            return <>{children}</>;
        };

        if (isElseComponent && !child.props.condition) {
            return <>{children}</>;
        }
    }).at(0);
}

export { Choose };