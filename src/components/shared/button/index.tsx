import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

// styles
import { ButtonContainer } from "./styles";

// interface
interface ButtonProps extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement> {
    children: ReactNode;
}


export function Button({ children, ...props }: ButtonProps) {
    return(
        <ButtonContainer>
            {children}
        </ButtonContainer>
    );
}