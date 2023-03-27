// libs
import { Wallet, providers, utils } from "ethers";

export function createdWallet( ) {
    const newWallet = Wallet.createRandom();

    return newWallet;
}
