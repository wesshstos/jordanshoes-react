import React from 'react'

const Header: React.FC = () => {
     return (
          <div className="w-full flex flex-col">
               <div className="flex justify-center items-center text-zinc-200 font-semibold tracking-widest text-xs bg-[#181818] p-4">
                    <span>Ganhe 20% de desconto na primeira compra</span>
               </div>

               <div className="flex items-center justify-center bg-zinc-100 text-zinc-800 py-6 text-4xl font-black uppercase">
                    <span>Jordan Shoes</span>
               </div>
          </div>
     )
}

export default Header