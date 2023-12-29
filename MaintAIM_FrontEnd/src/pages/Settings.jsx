import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';
import { UserIcon } from '../assets/icons/UserIcon';
import { Header } from '../components';



const Settings = () => {

  const [listUsers, setListOfUsers] = useState([]);
  const { activeMenu, setActiveMenu } = useStateContext();

  useEffect(() => {
    axios.get("http://localhost:3001/auth").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (


    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className='justify-between flex'>
        <Header
          category="Page"
          title="User Manager"
        />
        <NavLink
          to={`/registration`}
          className={`text-12 font-extrabold opacity-0.9 p-4 hover:bg-white w-97 h-4
              pt-5 rounded-xl buttonShadow 
              mt-8 m-4  bg-white flex
               justify-center border-1 border-fade-blue
              items-center text-center`}>
          Add User
        </NavLink>

      </div>

      <div className='flex-1 md:flex'>
        <div className={`flex flex-wrap  border-black  mt-10
            ${activeMenu ? 'justify-center md:w-[100%]' : ' justify-center md:w[100%] w-full items-center'}`}>

          {listUsers.map((value, key) => {
            return (
              <NavLink className="block w-full  flex-wrap m-4 mt-4 pl-10 font-inter text-base text-white bg-main-blue
              border-2 border-b-2 border-black appearnace-none dark:focus:border-blue-500 focus:outline-none 
              focus:ring-0 focus:text-white focus:border-blue-600 peer">
                <div className='absolute top-2 left-2 z-10 flex items-center pointer-events-none'>
                  <UserIcon />
                </div>

                <div>

                  <div>
                    <UserIcon />
                  </div>
                  <div>{value.username}</div>
                  <div>{value.email}</div>
                  <div>{value.role}</div>
                </div>


              </NavLink>
            )
          })}



        </div>
      </div>
    </div>


  )
}

export default Settings