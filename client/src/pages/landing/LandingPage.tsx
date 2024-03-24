import React from "react";
import hospital_icon from "../../assets/images/hospital_icon.png";
import relieved_icon from "../../assets/images/relieved_icon.png";
import ventilator_icon from "../../assets/images/vantilator_icon.png";
// import { Table } from "flowbite-react";
import doctor_icon from "../../assets/images/doctor_icon.png";
const LandingPage = () => {
  return (
    <div className="h-full w-full bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <nav className=" flex pr-10 justify-end gap-3  text-xl ">
        <div className=" bg-white w-8 h-8 rounded-xl text-center">
          <i className="fa-regular fa-user p-[5px]"></i>
        </div>
        <div className=" bg-white w-8 h-8 rounded-xl text-center">
          <i className="fa-regular fa-bell p-[5px]"></i>
        </div>
      </nav>
      <h1 className="text-3xl font-bold text-blue-950 pt-10">Dashboard</h1>
      <div className="stats  pt-5 flex flex-wrap justify-between gap-10">
        <div className="flex w-52 h-20  rounded-full  justify-center items-center bg-white">
          <div>
            <img src={hospital_icon} alt="" className="h-10" />
          </div>
          <div className="ml-4 text-sm">
            <div>250</div>
            <div className="font-bold">OPD Today</div>
          </div>
        </div>
        <div className="flex w-52 h-20  rounded-full justify-center items-center   bg-white">
          <div>
            <img src={relieved_icon} alt="" className="h-10" />
          </div>
          <div className="ml-4 text-sm">
            <div>89</div>
            <div className="font-bold">Relieved Today</div>
          </div>
        </div>
        <div className="flex w-52 h-20  rounded-full justify-center items-center   bg-white">
          <div>
            <img src={ventilator_icon} alt="" className="h-10" />
          </div>
          <div className="ml-4 text-sm">
            <div>300</div>
            <div className="font-bold">In Patient Today</div>
          </div>
        </div>
        <div className="flex w-52 h-20  rounded-full justify-center items-center   bg-white">
          <div>
            <img src={ventilator_icon} alt="" className="h-10" />
          </div>
          <div className="ml-4 text-sm">
            <div>52</div>
            <div className="font-bold">Ventilator</div>
          </div>
        </div>
      </div>
      <div className="graphs pt-10 flex flex-wrap justify-between gap-10 ">
        <div className="h-96 w-[600px] bg-white rounded-[40px] p-8 shadow-[0px_0px_6px_0px_#9f7aea]">
          <div className="font-bold text-lg">Hospital Survay</div>
          <div className="flex justify-end items-center text-sm" >
            <i className="fa-solid fa-circle text-pink-400 text-xs pr-2"></i>
            <span className="pr-5">New Patients</span>
            <i className="fa-solid fa-circle text-violet-300 text-xs pr-2 "></i>
            <span>Old Patients</span>
          </div>
        </div>
        <div className="h-96 w-[600px] bg-white rounded-[40px]  p-8 shadow-[0px_0px_6px_0px_#9f7aea]">
          <div className="font-bold text-lg">Common Disease Report</div>
          
        </div>
      </div>
      <div className="data h-auto flex flex-wrap justify-start gap-14">
        <div className="mt-10 p-10 w-[800px] rounded-[40px]  bg-white">
          <h1 className="p-1 text-lg font-bold">Booked Appointment</h1>
          <div className="overflow-x-auto pt-2 font-semibold">
            <table className="table-auto w-full shadow-md rounded-lg bg-white">

              <tbody>
                <tr className="bg-blue-100  transition-all duration-200 font-normal">
                  <td className="py-5 px-4 border-b">#</td>
                  <td className="py-5 border-b">Patient Name</td>
                  <td className="py-5 border-b">Assigned Doctor</td>
                  <td className="py-5 border-b">Date</td>
                  <td className="py-5 border-b">Diseases</td>
                  <td className="py-5 border-b pl-4">Actions</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-all duration-200">
                  <td className="py-5  px-4 border-b">1</td>
                  <td className="py-5 border-b">Ramesh Kumar</td>
                  <td className="py-5 border-b text-blue-500"><a href="#">Dr. Jacob Ryan</a></td>
                  <td className="py-5 border-b">12 Jan 2022</td>
                  <td className="py-5 border-b "><span className="bg-red-500 text-white font-normal p-[1px] block w-20 text-center ">Fever</span></td>
                  <td className="py-5 border-b">
                    <span className="  inline-block  w-8 h-8 mr-4 pt-[3px] text-center rounded-lg shadow-[0px_7px_16px_1px_#e9d8fd]"> <i className="fa-regular fa-pen-to-square"></i></span>
                    <span className=" inline-block   w-8 h-8   pt-[3px] text-center rounded-lg shadow-[0px_7px_16px_1px_#e9d8fd]">
                      <i className="fa-regular fa-trash-can"></i>
                    </span>

                  </td>
                </tr>
                <tr className="hover:bg-gray-100 transition-all duration-200">
                  <td className="py-5 px-4  border-b">2</td>
                  <td className="py-5 border-b">Ramesh Kumar</td>
                  <td className="py-5 border-b text-blue-500"><a href="#">Dr. Jacob Ryan</a></td>
                  <td className="py-5 border-b">12 Jan 2022</td>
                  <td className="py-5 border-b "><span className="bg-red-500 text-white font-normal p-[1px] block w-20  text-center  ">Cholera</span></td>
                  <td className="py-5 border-b">
                    <span className="  inline-block  w-8 h-8 mr-4 pt-[3px] text-center rounded-lg shadow-[0px_7px_16px_1px_#e9d8fd]"> <i className="fa-regular fa-pen-to-square"></i></span>
                    <span className=" inline-block   w-8 h-8   pt-[3px] text-center rounded-lg shadow-[0px_7px_16px_1px_#e9d8fd]">
                      <i className="fa-regular fa-trash-can"></i>
                    </span>

                  </td>
                </tr>
                <tr className="hover:bg-gray-100 transition-all duration-200">
                  <td className="py-5 px-4  border-b">3</td>
                  <td className="py-5 border-b">Ramesh Kumar</td>
                  <td className="py-5 border-b text-blue-500"><a href="#">Dr. Jacob Ryan</a></td>
                  <td className="py-5 border-b">12 Jan 2022</td>
                  <td className="py-5 border-b "><span className="bg-red-500 text-white font-normal p-[1px] block w-20  text-center  ">Fever</span></td>
                  <td className="py-5 border-b">
                    <span className="  inline-block  w-8 h-8 mr-4 pt-[3px] text-center rounded-lg shadow-[0px_7px_16px_1px_#e9d8fd]"> <i className="fa-regular fa-pen-to-square"></i></span>
                    <span className=" inline-block   w-8 h-8   pt-[3px] text-center rounded-lg shadow-[0px_7px_16px_1px_#e9d8fd]">
                      <i className="fa-regular fa-trash-can"></i>
                    </span>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="doc-list mt-10 p-10  rounded-[40px]  bg-white">
        <h1 className="p-1 text-lg font-bold">Doctors List</h1>
        <div className="overflow-x-auto pt-2 font-semibold">
        <table className="table-auto w-full shadow-md rounded-lg bg-white">
        <thead>
          <tr className="bg-blue-100  transition-all duration-200 font-normal ">
            <th className="py-5 px-4 text-left">#</th>
            <th className="px-4  py-5 border-b">Doctors Name</th>
            <th className="px-4  py-5 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 transition-all duration-200">
            <td className="py-5 px-4">
              <img src={doctor_icon} alt="" className=""/>
            </td>
            <td className="py-5 border-b">Dr.Jacob Ryan</td>
            <td className="py-5 border-b px-10"><span className="bg-green-500 text-white font-normal p-[1px] block w-20  text-center shadow-[0px_7px_24px_1px_#38a169] " >Available</span></td>
          </tr>
          <tr className="hover:bg-gray-100 transition-all duration-200">
          <td className="py-5 px-4">
              <img src={doctor_icon} alt="" className=""/>
            </td>
            <td className="py-5 border-b">Dr.Rubina Delayer</td>
            <td className="py-5 border-b px-10 "><span className="bg-green-500 text-white font-normal p-[1px] block w-20  text-center shadow-[0px_7px_24px_1px_#38a169]" >Available</span></td>
          </tr>
          <tr className="hover:bg-gray-100 transition-all duration-200">
          <td className="py-5 px-4">
              <img src={doctor_icon} alt="" className=""/>
            </td>
            <td className="py-5 border-b">Dr.Smith Rayen</td>
            <td className="py-5 border-b px-10"><span className="bg-green-500 text-white font-normal p-[1px] block w-20  text-center shadow-[0px_7px_24px_1px_#38a169] " >Available</span></td>
          </tr>
          <tr className="hover:bg-gray-100 transition-all duration-200">
          <td className="py-5 px-4">
              <img src={doctor_icon} alt="" className=""/>
            </td>
            <td className="py-5 border-b">Dr.Jacob Ryan</td>
            <td className="py-5 border-b px-10"><span className="bg-red-500 text-white font-normal p-[1px] block w-20  text-center shadow-[0px_7px_24px_1px_#c53030] " >Absent</span></td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default LandingPage;
