import React from "react";

export default (props: any) => {
     return (
          <div>
               <div className="w-full bg-black h-96 overflow-hidden relative">
                    <div className="z-10 absolute w-1/2 h-full flex flex-col justify-center left-24 text-shadow-xl">
                         <h1 className="text-3xl font-black text-zinc-50">{props.title}</h1>
                         <p className="text-zinc-50 w-fit text-justify my-5">{props.subtitle}</p>
                    </div>
                    <div className="bg-zinc-800  relative">
                         <img className="w-full h-screen object-cover absolute opacity-60" src={props.image} alt="" />
                    </div>
               </div>
               <div className="w=full py-10 flex flex-col justify-center items-center space-y-3">
                    <span className="text-3xl uppercase font-black">Destaques</span>
                    <p className="text-md px-2 text-center">Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
               </div>
          </div>
     )
}