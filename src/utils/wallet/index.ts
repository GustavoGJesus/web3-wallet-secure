// libs
import { Wallet } from "ethers";

export function createdWallet( ) {
    const newWallet = Wallet.createRandom();
    localStorage.setItem("@wallets:wallet-secure",JSON.stringify(newWallet));

    return newWallet;
}
