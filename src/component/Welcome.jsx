import React, {useContext} from "react";
import { AiFillPlayCircle } from "react-icons/ai";
//import {SiEthereum} from "react-icons/si"
//import {BsInfocircle} from "react-icons/bs"


import { Loader } from "./";
const Welcome= ()=>{
    


    return(
 

                    <div className="w-full flex md:justify-center justify-between items-center p-4">
                   
                   <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                   <div className="sm:text-center lg:text-left">
                   <h1 className="text-4xl tracking-tight font-extrabold text-yellow-500 sm:text-5xl md:text-6xl">
                       <span className="block lg:py-3 xl:inline">Upload Your NFTs </span>
                       <span className="block dark:text-white xl:inline">Discover, Collect, and Sell Extraordinary NFTs</span>
                       </h1>
                       <p className="mt-3 text-base dark:text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" >
                       on the world's first & largest NFT marketplace,this Arabic Dapps Course that is will learn more about nfts and solidity programming language   </p>
                        
                   </div>


                   </main>

                   <div className="flex-relative">
                        <img className="w-screen h-screen" src="https://i.postimg.cc/x12WxKPQ/Pngtree-marketplace-nft-art-background-flat-6501245.png" alt="headerSection Image" />
                   </div>
               </div>




        
    );
}

export default Welcome;