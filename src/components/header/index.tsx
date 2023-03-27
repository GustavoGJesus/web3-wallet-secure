// styles
// import { Button } from "../shared/button";
import {
  ContainerAddress,
  ContainerData,
  Divider,
  HeaderContainer,
  HeaderContent,
} from "./styles";

// libs
import { AiOutlineUser } from "react-icons/ai";
import Modal from "../shared/modal";
import useModal from "../../hooks/modal/useModal";
import { Button, Input } from "../main/styles";
import { useState } from "react";

//images
import logo from "../../assets/logo.png";

// types
interface HeaderProps {
  password: string;
  address: string;
  private_key?: string;
  pharse_recovery?: string;
}

export function Header({
  address,
  private_key,
  pharse_recovery,
  password,
}: HeaderProps) {
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [showData, setShowData] = useState<boolean>();
  const [message, setMessage] = useState<string>("");

  const { isOpen, toggle } = useModal();

  function handleChange(event: any) {
    setConfirmPassword(event?.target.value);
  }

  function handleConfirmPassword() {
    if (confirmPassword === password) {
      setShowData(true);
    } else {
      setShowData(false);
      setMessage("Invalid password");
    }
  }

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={logo} alt="logo" style={{ width: "220px" }} />

          {address && (
            <>
              <ContainerAddress>
                <Button
                  onClick={toggle}
                  style={{ background: "#203159", color: "var(--red)" }}
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
          )}
        </HeaderContent>
      </HeaderContainer>
      <Modal isOpen={isOpen} toggle={toggle}>
        {!showData && (
          <div
            style={{ display: "flex", gap: "20px", flexDirection: "column" }}
          >
            <p style={{ fontSize: "22px", fontWeight: "600" }}>
              Confirm your password
            </p>
            <Input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
            <p style={{ fontSize: "13px", color: "var(--red)" }}>{message}</p>

            <Button
              onClick={handleConfirmPassword}
              style={{
                display: "flex",
                padding: "15px",
                width: "100%",
                justifyContent: "center",
              }}
            >
              Confirm
            </Button>
          </div>
        )}
        {showData && (
          <>
            <p style={{ width: "400px", color: "var(--red)" }}>
              Warning: Never reveal this key. Anyone with your private keys will
              be able to steal the assets held in your account.
            </p>
            <h4>Wallet Address</h4>
            <ContainerData>{address}</ContainerData>

            <h4>Wallet private key</h4>
            <ContainerData>
              <p style={{ width: "100%", overflowY: "scroll" }}>
                {private_key}
              </p>
            </ContainerData>

            <h4>Pharse recovery</h4>
            <ContainerData>
              <p>{pharse_recovery}</p>
            </ContainerData>
          </>
        )}
      </Modal>
    </>
  );
}
