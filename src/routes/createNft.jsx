import {Navbar, Footer, Services, Welcome, Transaction} from '../component'
import {FaWallet} from 'react-icons/fa'
import { BsInfo, BsInfoCircle } from "react-icons/bs";


import { KryptoBirdContext } from "../context/contractcontext";
import { useContext, useState } from "react";


const CreateNft= ()=> {
  const {currentAccount, mint}=useContext(KryptoBirdContext)
  return (
    <div className='min-h-screen'>
      
      <div className='gradient-bg-welcome'>
      <Navbar/>

      <Footer/>

      </div>
      

    </div>)

}

export default CreateNft