// styles
import { Button, Input, MainContainer, MainContent } from "./styles";

//components
import useModal from "../../hooks/modal/useModal";
import Modal from "../shared/modal";
import { Wallet, providers, utils } from "ethers";
import { useState } from "react";

// libs
import { FaEthereum } from "react-icons/fa";
import { Header } from "../header";

export function Main() {
  const [ wallet, setWallet ] = useState<any>();
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>();
  const [network, setNetwork] = useState<boolean>();
  const [sucess, setSucess] = useState<boolean>();

  const { isOpen, toggle } = useModal();

  function createWallet() {
    const newWallet = Wallet.createRandom();

    setWallet(newWallet.privateKey);
    setWalletAddress(newWallet.address);
    setSucess(true);
    setNetwork(false);

    console.log(newWallet);
    console.log(walletAddress);

    toggle();
  }

  async function getData() {
    const provider = new providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/2616c45ad6ea49d0a64415ae2e911925"
    );

    const balance = utils.formatEther(await provider.getBalance(walletAddress));
    setBalance(balance);
    setSucess(true);
    setNetwork(true);

    console.log(balance);
  }

  return (
    <>
      <Header address={walletAddress} private_key={wallet} />
      <MainContainer>
        <MainContent>
          {!sucess && (
            <>
              <h1>Create a wallet</h1>
              <p>Create a your wallet with security</p>
              <Button style={{ background: "#fffff" }} onClick={toggle}>
                Create a new wallet
              </Button>
            </>
          )}

          {sucess && (
            <>
              {/* <h2>{walletAddress}</h2> */}
              <Button onClick={getData}>Get Balance</Button>

              {network && (
                <>
                  <h3>
                    {" "}
                    <FaEthereum /> Ethereum Sepolia
                  </h3>
                  <h3>{balance}</h3>
                </>
              )}
            </>
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
                color: "var(--green)",
              }}
            >
              Wallet password
            </p>
            <Input type="password" placeholder="Password" />
          </div>

          <Button
            onClick={() => createWallet()}
            style={{ padding: "15px", fontSize: "13px" }}
          >
            Create wallet
          </Button>
        </Modal>
      </MainContainer>
    </>
  );
}
