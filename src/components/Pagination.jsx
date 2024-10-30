import React from 'react'

function Pagination({pageNo,handlePrev,handleNext}) {
  return (
    <div className="flex justify-center p-5 mt-8 bg-gray-400">
        <div onClick={handlePrev} className="px-8 hover:cursor-pointer hover:scale-150 duration-300"><i class="fa-solid fa-arrow-left"></i></div>
        <div className="font-bold">{pageNo}</div>
        <div onClick={handleNext} className="px-8 hover:cursor-pointer hover:scale-150 duration-300"><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination