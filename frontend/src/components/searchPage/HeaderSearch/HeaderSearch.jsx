import React from 'react'
// import image from "../HouseData/assets/img/house-banner.png"

const image5 = require("../../../img/search.ico");

const HeaderSearch = () => {
  return (
    <div class="">
      <div className="  flex justify-center  bg-[url('https://ukhnk407acv3nrmyc15obad1-wpengine.netdna-ssl.com/wp-content/uploads/2013/12/893.jpg')] bg-cover  ">
        <div className="flex justify-center w-4/5">
          <input type="text" className="my-36 w-4/5 h-24 rounded-xl px-4 mr-2" placeholder='Search flats here...' />
          <button className=' hidden my-48 rounded-full  px-4 bg-white bg-opacity-10 border-1 border-white shadow-lg shadow-gray-700 border-spacing-1 hover:bg-opacity-30 hover:shadow-2xl hover:shadow-gray-300'><img className=' object-contain w-5' src={image5} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default HeaderSearch 