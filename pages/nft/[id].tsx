import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";




function NFTDropPage() {
    // Authentication
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  
  
    //--

  return (
  <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/*Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2'>
            <img className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" src="https://i.seadn.io/gae/cnh6R5BcL6r_cvl4QmqUiiwmZbXyqqejjWETtv2zHt1DzL3Ot0uGQaVA7RXPiYOyn7FClLBVLvJWBos4J_ZYpk41-bhWyo3YxMQR0Q" alt='' />
          </div>
          <div className='space-y-2 p-5 text-center'>
            <h1 className="text-4xl font-bold text-white">Quick Faces</h1>
            <h2 className="text-xl font-extrabold text-white tracking-tight text"> A Collection of Quick Faces with Kans Signature
            </h2>
        </div>
        </div>
      </div>
      
      
        {/* Right*/}
        <div className="flex flex-1 flex-col p-12 lg:col-span-6">
          {/*Header*/}
        <header className="flex items-center justify-between">
          <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
            The{' '}
              <span className="font-extrabold underline decoration-pink">Quick Faces</span>{' '}
              NFT Market Place</h1> 

          <button onClick={() => (address ? disconnect() : connectWithMetamask())} className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lc:py-3 lg:text-base">
            {address ? 'Desconectar' : 'Conectar'} 
            </button>
        </header>

        <hr className="my-2 border"/>
        {address && (
          <p className='text-center text-sm text-rose-400'>Estás conectad@ con la cartera {address.substring(0, 5)}...{address.substring(address.length - 5)}
          </p>
        )}
        

        {/*Content*/}

        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text center lg:justify-center lg:space-y-0">

          <img className= "w-80 object-cover pb-10 lg:h-40"
            src="https://i.seadn.io/gae/Y6opAJ4c7zPjTcZc-MpwXhHD9lY0BX5HrjT9MTJjzu8A9R1s86TnKLjg8jGGr0g0Bg3Fr7zoxUgV1KLJ1tMNejsP9mYs8FeC9dIrgLs?auto=format&w=1920" />
          
          <h1 className="text-3xl font-bold lg:text-5xl lg: font-extrabold">Colección Quick Faces NFT Marketplace
          </h1>
        
          <p className="pt-2 text-xl text-green-500">13/21 NFT Acuñados</p>
        
        </div>

        {/*Mint Buttom*/}
        <button className='h-16 w-full rounded-full text-white font-bold bg-red-600'>Acuñar NFT</button>
      </div> 
      </div>
   
  )
}

export default NFTDropPage