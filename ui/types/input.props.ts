export type InputTextProps = Omit<
    Partial<React.InputHTMLAttributes<HTMLInputElement>>, 
    'className' | 'type'
>;