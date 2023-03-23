// styles
// import { Button } from "../shared/button";
import { ContainerAddress, Divider, HeaderContainer, HeaderContent } from "./styles";

// libs
import {AiOutlineUser } from 'react-icons/ai'
import Modal from "../shared/modal";
import useModal from "../../hooks/modal/useModal";
import { Button, Input } from "../main/styles";

// types 
interface HeaderProps {
  address: string;
  private_key?: string;
}


export function Header({ address, private_key }: HeaderProps) {
  const { isOpen, toggle } = useModal();

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>secure wallet</h1>

        {
        address && 
          <>
            <ContainerAddress>
              <Button
                onClick={toggle}
                style={{ background: "#cb3837", color: "#fff" }}
              >
                Recovery Pharse
              </Button>
              <Divider />
              <p>
                {" "}
                <AiOutlineUser /> {address}
              </p>
            </ContainerAddress>
          </>

        }
      </HeaderContent>

      <Modal isOpen={isOpen} toggle={toggle}>
        <h4 style={{ fontSize: "25px" }}>Wallet Address</h4>
        <div>{address}</div>

        <h4>Wallet private key</h4>
        <div style={{width: "200px"}}>{private_key}</div>
      </Modal>
    </HeaderContainer>
  );
}