import React from 'react'
import CardUi from './studentCard/CardUi'

const PreviewModel = ({isModal, cardDetail}) => {
  return (
    <div className="flex justify-center backdrop-filter backdrop-blur items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border border-solid border-red-300 rounded-lg shadow-lg relative flex flex-col w-[800px] h-[350px] bg-white outline-none focus:outline-none">
            <div className="flex p-2 justify-between border-b border-solid border-red-200 rounded-t ">
              <span className="text-3xl  font=semibold">Student College Card</span>
              <button
                className="bg-transparent  border-0 text-black"
                onClick={() => isModal(false)}
              >
                <span className="text-black opacity-7 h-8 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                  x
                </span>
              </button>
            </div>
            <div className='p-4 mt-1'> 
            <CardUi  data={cardDetail}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PreviewModel
