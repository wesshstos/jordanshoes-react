import React from "react";

export default (props: any) => {
     return(
          <div className="h-60 w-60 flex justify-center items-center bg-[#EBE9EA] rounded-lg mb-10">
               <img className="w-52" src={props.img} alt="" />
          </div>
     )
}