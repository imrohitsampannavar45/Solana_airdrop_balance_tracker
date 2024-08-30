import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

const Airdrops = () => {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdropToUser() {

        await connection.requestAirdrop(wallet.publicKey, 10);
        alert("Airdropped SOL");
    }

    return (
        <div>
            <input type="text" placeholder='Amount' />
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    );
}

export default Airdrops;
