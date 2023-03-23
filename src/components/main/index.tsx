// styles
import { Button, MainContainer, MainContent } from "./styles";

//components
import useModal from "../../hooks/modal/useModal";
import Modal from "../shared/modal";

export function Main() {
  const { isOpen, toggle } = useModal();

  return (
    <MainContainer>
      <MainContent>
        <h1>Create a wallet</h1>
        <p>Create a your wallet with security</p>
        <Button style={{ background: "#fffff" }} onClick={toggle}>
          Create a new wallet
        </Button>
      </MainContent>

      <Modal isOpen={isOpen} toggle={toggle}>
        <h1>Hello</h1>
      </Modal>
    </MainContainer>
  );
}
