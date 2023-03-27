// styles
import { Button, ContainerBalance, ContentBalance, Input, MainContainer, MainContent } from "./styles";

//components
import useModal from "../../hooks/modal/useModal";
import Modal from "../shared/modal";
import { Wallet, providers, utils } from "ethers";
import { useState } from "react";

// libs
import { FaEthereum } from "react-icons/fa";
import { Header } from "../header";

// images
import walletSecure from "../../assets/wallet-secure.png";

export function Main() {
  const [ password, setPassword ] = useState<any>();
  const [ wallet, setWallet ] = useState<any>();
  const [ pharse, setPharse ] = useState<any>();
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>();
  const [network, setNetwork] = useState<boolean>();
  const [sucess, setSucess] = useState<boolean>();

  const { isOpen, toggle } = useModal();

  function handleChange(event: any){
    setPassword(event?.target.value);
  };

  function createWallet() {
    const newWallet = Wallet.createRandom();
    // const newWalletJson = newWallet.toJSON();

    // async function encryptWallet(){
    //   const encryptedWallet = await newWallet.encrypt(password);
    // }

    setWallet(newWallet.privateKey);
    setWalletAddress(newWallet.address);
    setPharse(newWallet.mnemonic?.phrase);
    setSucess(true);
    setNetwork(false);

    // encryptWallet();
    toggle()
  }

  async function getData() {
    const provider = new providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/2616c45ad6ea49d0a64415ae2e911925"
    );
    const balance = utils.formatEther(await provider.getBalance(walletAddress));

    setBalance(balance);
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
          </div>

          <Button
            onClick={() => createWallet()}
            style={{ padding: "15px", fontSize: "13px", color: "#FFFFFF" }}
          >
            Create wallet
          </Button>
        </Modal>
      </MainContainer>
    </>
  );
}
