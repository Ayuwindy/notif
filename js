import React from 'react'
import Close from '../Notification.js/silang.png'



const Notif = () => {
  return (
    <>
    <div className="flex content-center text-center  flex-row bg-[#73CA5C] mt-100 rounded-lg shadow-lg mx-auto 
    max-w-3xl my-6 relative justify-between w-72 h-10">
    <h1 className=" text-white item-center mx-5 my-2 font-semibold text-sm font-medium ">Produk Berhasil Diterbitkan</h1>
    <img src = {Close} className="w-3 h-3 mx-5 my-3" alt="image" >

     

    </img>
    </div>

    
      </>
  )
}

export default Notif
