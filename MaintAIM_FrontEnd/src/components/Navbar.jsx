import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from '../data/avatar.jpg';
import { Cart, Email, Notifications, UserProfile } from '.';
import { useStateContext } from "../contexts/ContextProvider";
import { UserIcon } from "../assets/icons/UserIcon";
import { EmailIcon } from "../assets/icons/EmailIcon";
import axios from "axios";


const NavButton = ({ title, customFunc, icon,
  color, dotColor }) => (
  <TooltipComponent content={title}
    position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3
      hover:bg-gray-100">
      <span style={{ background: dotColor }}
        className="absolute inline-flex 
        rounded-full h-2 w-2 right-2 top-2"/>
      {icon}

    </button>
  </TooltipComponent>
);



const Navbar = () => {
  const { activeMenu, setActiveMenu,
    isClicked, setIsClicked, handleClick,
    screenSize, setScreenSize, currentColor,
    showEmailModal, setShowEmailModal, handleOnClose,
    showUserProfileModal, setShowUserProfileModal } = useStateContext();

  const [listUsers, setListOfUsers] = useState([]);

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
          accessToken: sessionStorage.getItem("accessToken"),
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

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener
      ('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize])

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('elementid'); // Replace with the actual ID of your element
      if (element) {
        if (window.scrollY > 20) { // Adjust the scroll position as needed
          element.classList.add('fixed');
        } else {
          element.classList.remove('fixed');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const EmailButton = ({ title, customFunc, icon,
    color, dotColor }) => (
    <TooltipComponent content={title}
      position="BottomCenter">
      <button
        type="button"
        onClick={() => setShowEmailModal(true)}
        style={{ color }}
        className="relative text-xl rounded-full p-3
        hover:bg-gray-100">
        <span style={{ background: dotColor }}
          className="absolute inline-flex 
          rounded-full h-2 w-2 right-2 top-2"/>
        {icon}

      </button>
    </TooltipComponent>
  );

  const UserProfileButton = ({ title, customFunc, icon,
    color, dotColor }) => (
    <TooltipComponent content={title}
      position="BottomCenter">
      <button
        type="button"
        onClick={() => setShowUserProfileModal(true)}
        style={{ color }}
        className="relative text-xl rounded-full p-3
        hover:bg-gray-100">
        <span style={{ background: dotColor }}
          className="absolute inline-flex 
          rounded-full h-2 w-2 right-2 top-2"/>
        {icon}

      </button>
    </TooltipComponent>
  );



  return (

    <div className="flex justify-between relative
    p-2 md:mx-6 mt-20 transition-all duration-300"
      id="elementid">
      {/* change mt-20 after defense*/}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu(
          (prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<UserIcon />} />

        <EmailButton
          title="Email"
          dotColor='#03C9D7'
          color={currentColor}
          icon={<EmailIcon />} />

        <NavButton
          title="Notifacations"
          customFunc={() => handleClick('notifications')}
          color={currentColor}
          icon={<UserIcon />} />

        <TooltipComponent content='Profile'
          position="BottomCenter">
          <UserProfileButton>
            <div className="flex items-center gap-2
          cursor-pointer p-1 hover:bg-gray-100 rounded-lg"
              onClick={() => handleClick('userProfile')}>
              <img src={avatar}
                alt="avatar"
                className="rounded-full w-8 h-8" />
              <p>
                <span className="text-gray-400">Hi, </span> {''}

                <span className="text-gray-400
    font-bold ml-1 text-14">{authState.firstname}</span>


              </p>
              <MdKeyboardArrowDown
                className="text-gray-400 text-14" />
            </div>
          </UserProfileButton>

        </TooltipComponent>

        {isClicked.cart && <Cart />}
        <Email onClose={handleOnClose} visble={showEmailModal} />
        {isClicked.notifications && <Notifications />}
        <UserProfile onClose={handleOnClose} visble={showUserProfileModal} />
      </div>

    </div>

  )
}

export default Navbar