import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import emailjs from "@emailjs/browser";

function Email({ visble, onClose }) {

  const { activeMenu, setActiveMenu,
    isClicked, setIsClicked, handleClick,
    screenSize, setScreenSize, currentColor,
    showEmailModal, setShowEmailModal,
    showUserProfileModal, setShowUserProfileModal } = useStateContext();

    const [authState, setAuthState] = useState({
      username: "",
      id: 0,
      firstname: "",
      status: false,
    });
  
    useEffect(() => {
      axios
        .get("http://localhost:3001/auth/auth", {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        })
        .then((response) => {
          if (response.data.error) {
            setAuthState({ ...authState, status: false });
          } else {
            setAuthState({
              username: response.data.username,
              id: response.data.id,
              firstname: response.data.firstname,
              status: true,
            });
          }
        });
    }, []);


  const handleOnClose = (e) => {
    if (e.target.id === 'container')
      onClose()
  }

  const sendEmail = (e) => {
    e.preventDefault();
    alert("submitted");

    emailjs.sendForm('service_taeadrd', 'template_id', e.target, 'public_key')
  }

  if (!visble) return null;

  return (
    <div id='container' onClick={handleOnClose} className="fixed inset-0 z-10000 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-lg w-[800px] h-[500px]">
        <div className='flex w-[800px] p-3 h-[50px] justify-between border-b-1 border-black 
         rounded-t-[10px]' style={{ backgroundColor: currentColor }}>
          <h1 className="font-semibold text-left text-xl text-gray-700">
            New Message
          </h1>
          <button id='container' onClick={handleOnClose}
            className="text-12 font-extrabold opacity-0.9  hover:bg-white w-5 h-5
          rounded-2xl mt-2  
         text-white hover:text-black flex justify-center border-1 border-fade-blue
         items-center text-center">
            X
          </button>
        </div>
        <div>
          
        </div>
        <form className='m-0 p-0' onSubmit={sendEmail}>
          <div className="flex flex-col">
          <label
              type="text"
              className="m-0 border-t-1 border-gray-700 p-2"
              id='recepient'
              name='recepient'
            >From: <span className="font-bold">{authState.firstname}</span></label>
            <input
              type="text"
              className="border-b-1  border-t-1 border-gray-700 p-2"
              placeholder="Recepients"
              id='recepient'
              name='recepient'
            />
            <input
              type="text"
              className="border-b-1 border-gray-700 p-2  "
              placeholder="Subject"
              id='subject'
              name='subject'
            />
            <textarea name="message" id="message"
              className="border-b-1 border-gray-700 pt-4 pl-2 h-[250px]"
              placeholder='Message'></textarea>
          </div>

          <div className="text-left ml-4 mt-2">
            <button className="text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-80 h-2
               rounded-xl buttonShadow mt-4  
              text-white hover:text-black flex justify-center border-1 border-fade-blue
              items-center text-center" style={{ backgroundColor: currentColor }}
              type='submit'
              >
              Send
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Email
