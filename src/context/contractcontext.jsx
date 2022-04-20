import React, {useContext, useEffect, useState} from 'react'


import {ethers} from 'ethers'

import { contracABI, contractAddress } from '../utils/const.js'

const {ethereum}= window
export const KryptoBirdContext= React.createContext();

const createEthereumContract= ()=>{

  const provider= new ethers.providers.Web3Provider(ethereum);
  const signer= provider.getSigner();
  const TransactionContract= new ethers.Contract(contractAddress, contracABI,signer)


    return TransactionContract
}



export const TransactionProvider= ({ children })=>{

  const [currentAccount,setcurrentAccount]=useState("")

  const [totalSupply,setTotalSupply]=useState(0)
  const [kryptoBirdz,setKryptoBirdz]= useState([])

  const [formData, setFormData]=useState({KryptoBird:''})



  const inicilitation= async () =>{
    
    try {

      if(ethereum){
           
    
      const contract=createEthereumContract()
      const supply= contract.method.totalSupply()
      setTotalSupply(supply)


      //llamar todo el arreglo de nfts

      for(let i = 1; i <= totalSupply; i++) {
        const KryptoBird = await contract.method.kryptoBirdz(i - 1)
        // how should we handle the state on the front end? 
        setKryptoBirdz({
            kryptoBirdz:[...kryptoBirdz, KryptoBird]
        })

      }

      
    }} catch (error) {
      
    }
    
 
  }
  //-------------------------------------------------------------------------//

  const mint = async (kryptoBird) => {
    
    try {

      if(ethereum){
        const contract=createEthereumContract()
    
      const minar= await contract.method.mint()
    
      await ethereum.request({method:'eth_sendTransaction', params:[{from:currentAccount}]})
      .once('receipt', (receipt)=> {
        setKryptoBirdz({
        kryptoBirdz:[...kryptoBirdz, KryptoBird]
        })
      })

      }
      
    } catch (error) {
      console.log('error')
    }
    
      
  };


  //------------------------conectar y registrar cuenta metamask--------------------------//
  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
         
            image: transaction.image,

        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected= async ()=>{

    if(!ethereum) return alert('please install Metamask')

    const accounts= await ethereum.request({method:'eth_accounts'})

    console.log(accounts)
}


  const connectWallet= async ()=>{
    try {
        if(!ethereum) return alert('please install Metamask')

        const accounts= await ethereum.request({method:'eth_requestAccounts'});
        setcurrentAccount(accounts[0])

        getAllTransactions();
  
    } catch (error) {
        console.error('error')
    }
  }














  //----------------------------------------------------------------------------//

    useEffect (()=>{
      checkIfWalletIsConnected();
      mint()
      inicilitation()


    },)




    
    return(
        <KryptoBirdContext.Provider value={{connectWallet, currentAccount}}>
            { children }
        </KryptoBirdContext.Provider>
    )
}