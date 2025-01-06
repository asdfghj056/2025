import React from "react";
function Card({model,age,country,folloewrs}){
    return(
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] mx-10 mt-2 ">
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1714195646879-d31243782c99?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="test"
            className="object-cover object-center rounded-t-xl h-42 w-42"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold text-sm text-white-600">{model}</h1>
            <h1 className='text-sm text-white-600'>{country}</h1>
          </div>
          <div className="flex  justify-between">
            <p>{age}</p>
            <p>{folloewrs}</p>
          </div>
        </div>
      </div>
    )
        
}

export default Card