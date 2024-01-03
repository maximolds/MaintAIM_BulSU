import React, { useState, useEffect } from 'react'
import { useStateContext } from "../contexts/ContextProvider";

function UserProfile({visble, onClose}) {

  const { currentColor } = useStateContext();

  const handleOnClose = (e) => {
    if (e.target.id === 'container')
      onClose()
  }


  if (!visble) return null;

  return (
    <div id='container' onClick={handleOnClose} className="fixed inset-0 z-10000 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-lg w-[800px] h-[500px]">
        <div>

        </div>
      </div>
    </div>
  )
}

export default UserProfile