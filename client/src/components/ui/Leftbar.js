// Inside Leftbar.js
import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./leftbar.css";
import { FcServices } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { FcPortraitMode } from "react-icons/fc";
import { FcInspection, FcAddressBook } from "react-icons/fc";
import { FcMultipleInputs } from "react-icons/fc";
import { FcUnlock } from "react-icons/fc";
import { FaUserPen } from "react-icons/fa6";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { RxDoubleArrowRight } from "react-icons/rx";
import { IoIosPaper } from "react-icons/io";
import { Tooltip, Button } from "flowbite-react"

// import { useCookies } from "react-cookie";
// import { useLoginContext } from "../Contexts/LoginContext/LoginContext";


const Leftbar = ({ children }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("default");
  const [hidden, setHidden] = useState('link_text');
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  // const [, , removeCookie] = useCookies();
  // const { setLoginStatus, loginStatus } = useLoginContext();
  const [w_margin, setw_margin] = useState('190px')

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleDrawerClick = () => {
    setHidden(hidden === "link_text" ? 'hide' : 'link_text')
    setSidebarCollapsed((prevState) => !prevState);
    setw_margin(w_margin === "190px" ? "100px" : "190px")
  }

  const handleToggleSidebar = () => {
    setSidebarCollapsed((prevState) => !prevState);
  };

  const logout = () => {
    // removeCookie('userType');
    // setLoginStatus(null);
    navigate('/')
  }

  return (
    <div className="cpanel-container">
      {/* ------------- just for taking div space -------- */}
      <div className="leftbar mr-20 opacity-0">
        <ul>
          <div className={hidden}></div>
        </ul>
      </div>
      {/* --------------------------------------------- */}


      <div className="leftbar fixed">
        <nav>
          <div className="center drawer" onClick={() => handleDrawerClick()}>

            {isSidebarCollapsed ?
              (
                <RxDoubleArrowRight />
              ) : (
                <RxDoubleArrowLeft />
              )}

          </div>
          <ul>
            <NavLink to="/" className='link'>
              <li>
                <FaHome className="text-orange-500" />
                <div className={hidden} > <Tooltip content="Home">
                  <Button className=" text-black">Home</Button>
                </Tooltip></div>
              </li>
            </NavLink>

            <NavLink
              to="."
              className={`link ${activeLink === "." ? "active-link" : ""}  ${(activeLink === "default") && "active-link"}`}
              onClick={() => handleLinkClick(".")}
            >  <li>
                <FcServices />
                <div className={hidden} > <Tooltip content="Profile">
                  <Button className=" text-black">Profile</Button>
                </Tooltip></div>
              </li>
            </NavLink>


            <NavLink
              to="editquestions"
              className={`link ${activeLink === "editquestions" ? "active-link" : ""}`}
              onClick={() => handleLinkClick("editquestions")}
            >  <li>
                <FcPortraitMode />
                <div className={hidden} >
                  <Tooltip content="Edit Questions">
                    <Button className="text-black">Edit Questions</Button>
                  </Tooltip>
                </div>
              </li>
            </NavLink>



            <NavLink
              to="createquestions"
              className={`link ${activeLink === "createquestions" ? "active-link" : ""}`}
              onClick={() => handleLinkClick("createquestions")}
            >  <li>
                <IoIosPaper className="text-cyan-700" />
                <div className={hidden} > <Tooltip content="Add Question">
                  <Button className=" text-black">Add Question</Button>
                </Tooltip></div>
              </li>
            </NavLink>

            <NavLink
              to="createtest"
              className={`link ${activeLink === "createtest" ? "active-link" : ""}`}
              onClick={() => handleLinkClick("createtest")}
            >  <li>
                <FcAddressBook className="text-green-700" />
                <div className={hidden} ><Tooltip content="Add Test">
                  <Button className=" text-black">Add Test</Button>
                </Tooltip></div>
              </li>
            </NavLink>

            {"admin" === "admin" && (
              <>
                <NavLink
                  to="createstaff"
                  className={`link ${activeLink === "createstaff" ? "active-link" : ""}`}
                  onClick={() => handleLinkClick("createstaff")}>
                  <li>
                    <FcInspection />
                    <div className={hidden} ><Tooltip content="Create Staff">
                      <Button className=" text-black">Create Staff</Button>
                    </Tooltip></div>
                  </li>
                </NavLink>


                <NavLink
                  to="editstaffs"
                  className={`link ${activeLink === "editstaffs" ? "active-link" : ""}`}
                  onClick={() => handleLinkClick("editstaffs")}>
                  <li>
                    <FaUserPen style={{ color: 'red' }} />
                    <div className={hidden} ><Tooltip content="Edit Staff">
                      <Button className=" text-black">Edit Staff</Button>
                    </Tooltip></div>
                  </li>
                </NavLink>
              </>
            )}


            <NavLink
              to="studentsummary"
              className={`link ${activeLink === "studentsummary" ? "active-link" : ""}`}
              onClick={() => handleLinkClick("studentsummary")}
            ><li>
                <FcMultipleInputs />
                <div className={hidden} ><Tooltip content="Student Info">
                  <Button className=" text-black">Student Info</Button>
                </Tooltip></div>              
                </li></NavLink>


            <div
              className={`link ${activeLink === "logout" ? "active-link" : ""}`}
              onClick={() => logout()}
            > <li>
                <FcUnlock />
                <div className={hidden} ><Tooltip content="Logout">
                  <Button className=" text-black">Logout</Button>
                </Tooltip></div>
              </li>
            </div>

          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className="main-content">
        {/* Outlet for rendering nested routes */}
        {children || (
          <Outlet>
            {/* Default content when no nested route is matched */}
          </Outlet>
        )}
      </div>
    </div>
  );
};

export default Leftbar;