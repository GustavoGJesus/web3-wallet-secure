// styles
import {
  Button,
  ContainerBalance,
  ContentBalance,
  Input,
  MainContainer,
  MainContent,
} from "./styles";

//components
import useModal from "../../hooks/modal/useModal";
import Modal from "../shared/modal";
import { providers, utils } from "ethers";
import React, { useState } from "react";

// libs
import { FaEthereum } from "react-icons/fa";
import { Header } from "../header";

// images
import walletSecure from "../../assets/wallet-secure.png";
import { createdWallet } from "../../utils/wallet";


export function Main() {
  const [password, setPassword] = useState<string | any>();
  const [wallet, setWallet] = useState<{} | any>();
  const [pharse, setPharse] = useState<string>();
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>();
  const [txt, setTxt] = useState<number>();
  const [network, setNetwork] = useState<boolean>();
  const [sucess, setSucess] = useState<boolean>();
  const [message, setMessage] = useState<string>("");

  const { isOpen, toggle } = useModal();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event?.target.value);
  }

  function createWallet() {
    const wallet = createdWallet();

    if (password !== undefined) {
      setWallet(wallet.privateKey);
      setWalletAddress(wallet.address);
      setPharse(wallet.mnemonic?.phrase);
      setSucess(true);
      setNetwork(false);

      toggle();
    } else {
      setMessage("Invalid Password");
    }

  }

  async function getData() {
    const provider = new providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/2616c45ad6ea49d0a64415ae2e911925"
    );
    const balance = utils.formatEther(await provider.getBalance(walletAddress));
    const txtCount = await provider.getTransactionCount(walletAddress);

    setBalance(balance);
    setTxt(txtCount);
    setSucess(true);
    setNetwork(true);
  }

  return (
    <>
      <Header
        address={walletAddress}
        private_key={wallet}
        pharse_recovery={pharse}
        password={password}
      />
      <MainContainer>
        <MainContent>
          {!sucess && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "grid", gap: "20px", width: "30%" }}>
                <p>Welcome to the,</p>
                <h1
                  style={{
                    fontSize: "50px",
                    fontWeight: 700,
                    color: "#ffffff",
                  }}
                >
                  Secure Wallet
                </h1>
                <p>
                  Create your end-to-end encrypted wallet and own your key to
                  the world of cryptocurrencies
                </p>
                <Button onClick={toggle}>Create a new wallet</Button>
              </div>

              <div>
                <img src={walletSecure} style={{ width: "400px" }} alt="" />
              </div>
            </div>
          )}

          {sucess && (
            <ContainerBalance>
              {/* <h2>{walletAddress}</h2> */}
              {network && (
                <>
                  <ContentBalance>
                    <h3>
                      {" "}
                      <FaEthereum /> Ethereum Sepolia
                    </h3>
                    <p>Balance available</p>
                    <h4>{balance} ETH</h4>
                    <h4>{txt} Txns</h4>
                  </ContentBalance>
                </>
              )}
              {!network && <Button onClick={getData}>Get Balance</Button>}
            </ContainerBalance>
          )}
        </MainContent>

        <Modal isOpen={isOpen} toggle={toggle}>
          <h4 style={{ fontSize: "25px" }}>Create a new wallet</h4>

          <div
            style={{ display: "flex", gap: "10px", flexDirection: "column" }}
          >
            <p
              style={{
                opacity: "0.5",
                fontSize: "16px",
                color: "#487ae8",
              }}
            >
              Wallet password
            </p>
            <Input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
            <p>{message}</p>
          </div>

          <Button
            onClick={createWallet}
            style={{ padding: "15px", fontSize: "13px", color: "#FFFFFF" }}
          >
            Create wallet
          </Button>
        </Modal>
      </MainContainer>
    </>
  );
}
