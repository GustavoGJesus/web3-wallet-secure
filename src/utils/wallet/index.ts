// libs
import { Wallet } from "ethers";

export function createdWallet( ) {
    const newWallet = Wallet.createRandom();
    const encryptWallet = newWallet.encrypt(newWallet.address)

    localStorage.setItem(
      "@wallets:wallet-secure",
      JSON.stringify(encryptWallet)
    );

    return newWallet;
}
