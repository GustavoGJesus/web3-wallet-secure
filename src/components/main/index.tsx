// styles
import { Button, Input, MainContainer, MainContent } from "./styles";

//components
import useModal from "../../hooks/modal/useModal";
import Modal from "../shared/modal";

export function Main() {
  const { isOpen, toggle } = useModal();

  function Teste() {
    console.log('criar wallet')
    toggle();
  }

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
        <h4 style={{ fontSize: "25px" }}>Create a new wallet</h4>

        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <p
            style={{ opacity: "0.5", fontSize: "16px", color: "var(--green)" }}
          >
            Wallet password
          </p>
          <Input type="password" placeholder="Password" />
        </div>

        <Button onClick={Teste} style={{ padding: "15px", fontSize: "13px"}}>Create wallet</Button>
      </Modal>
    </MainContainer>
  );
}
