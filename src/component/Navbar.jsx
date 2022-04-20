
import React, { useContext, useState } from 'react';
import { KryptoBirdContext } from "../context/contractcontext";
//


//

const Navbar= (props)=>{
    const {connectWallet, currentAccount}=useContext(KryptoBirdContext)
    return(
        <nav nav className='w-full flex md:justify-center justify-between items-center p-4'>

          <div className='sm:flex-[0.5] flex-initial justify-center items-center'>

          <a href="/"><img src='https://i.postimg.cc/d3fnVGxN/png.png' alt='logo' className='w-40 cursor-pointer'></img></a>
   
          </div>

          < ul className='text-white md:flex hidden list-nome flex-row justify-between items-center flex-initial'>
              <a href="dashboard" className="flex flex row justify-center item-center mx-2 my-2 px-5 py-3">
                  Dashboard
              </a>
              <a href="createNft" className="flex flex row justify-center item-center mx-2 my-2 px-5 py-3">
                  CreateNFT
              </a>
              <button type='button' onClick={connectWallet} className='flex flex row justify-center item-center mx-2 my-2 px-5 py-3 bg-[#2952e3]  rounded-full cursor-pointer hover:bg-[#2546bd]'>
              {currentAccount.length > 0 ? (
                String(currentAccount).substring(0, 6) +
                 "..." +
                String(currentAccount).substring(38)
                ) : (
                <span>Connect Wallet</span>
                )}  </button>
          </ul>


      </nav>
    );
}

export default Navbar;