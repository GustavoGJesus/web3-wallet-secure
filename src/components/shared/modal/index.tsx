// react or any libs related content
import { ReactNode } from "react";
import { Box, Container } from "./styles";

// styles


// interfaces
interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <Container onClick={props.toggle}>
          <Box onClick={(e) => e.stopPropagation()}>{props.children}</Box>
        </Container>
      )}
    </>
  );
}

export default Modal;
