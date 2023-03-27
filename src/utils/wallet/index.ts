// libs
import { Wallet } from "ethers";

export function createdWallet( ) {
    const newWallet = Wallet.createRandom();

    return newWallet;
}
