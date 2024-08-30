import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import Airdrops from './Airdrops';
import  ShowSolBalance  from './Balance';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import './App.css'

function App() {

  return (

    <div className='main'>
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/KXyzPi6evX36vT_Z0ZuLje_kax-UJyE4"}>

    <br />
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <br />
            <WalletMultiButton />
            <br />
            <br/>
            <WalletDisconnectButton />

        <br />
           <Airdrops />
           <ShowSolBalance/>
           
            { /* Your app's components go here, nested within the context providers. */ }
        </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
</div>
  )
}

export default App
