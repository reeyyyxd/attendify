  import React from "react";
  import TextField from "@mui/material/TextField";
  import { Link } from "react-router-dom";
  import logoImg from "./assets/logo.png";
  import { MdOutlineWork } from "react-icons/md";
  import { PiStudentFill } from "react-icons/pi";
  import { IoIosCloseCircle } from "react-icons/io";
  import { FaUnlock } from "react-icons/fa6";
  import { Button } from "@mui/material";
  

  export default function AdminVerification() {
    return (
      <div className="h-screen w-full bg-orange-100 ">
        <nav className="bg-teal-950">
          <img className="h-12" src={logoImg} alt="logo" />
        </nav>

        <div className="w-1/3 ms-8 mt-6">
          <h1 className="text-black font-bold text-2xl">Hello, Admin</h1>
        </div>

        <div className="flex items-center w-full ms-8 pt-6 space-x-4">
        <div className="flex-grow">
            <input
               type="search"
               placeholder="Search here..."
               className="bg-orange-200 bg-opacity-100 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
             />
        </div>
          <div className="w-1/6">
          <Button variant="contained" sx={{ ml: 'auto',bgcolor: '#F0E68C' }}>
          <Link to="/admin" className="text-blue-600 hover:text-blue-700">
            Users
          </Link>
          </Button>
          </div>
          
          <div className="w-1/6">
          <Button variant="contained" sx={{ ml: 'auto',bgcolor: '#F0E68C' }}>
          <Link to="/admineve" className="text-blue-600 hover:text-blue-700">
            Event
          </Link>
          </Button>
        </div>
       
        <div className="w-1/6">
        <Button variant="contained" sx={{ ml: 'auto',bgcolor: '#F0E68C' }}>
          <Link
            to="/verification"
            className="text-blue-600 hover:text-blue-700"
          >
            Verification
          </Link>
          </Button>
        </div>

        <div className="w-1/6">
        <Button variant="contained" sx={{ ml: 'auto',bgcolor: '#F0E68C' }}>
            {/* Logout Link */}
          <Link to="/login" className="text-blue-600 hover:text-blue-700">
            Logout
          </Link>
          </Button>
        </div>
  
      </div>


          




        {/* table */}
        <h2 className="text-black font-bold text-2xl mt-6 ml-6">Users</h2>
        <table class="table-auto mt-6 w-full ">
        <thead>
        <tr class="bg-teal-950"> 
          <th class="w-1/12">
            <input type="checkbox" class="mr-4"></input>
          </th>
        
          <th class="w-2/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
            Name
          </th>
        <th class="w-3/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
          ID Number
        </th>
        <th class="w-2/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
          Proof
        </th>
        <th class="w-4/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
          Set Role
        </th>
      </tr>
    </thead>


     <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="w-1/12">
              <input type="checkbox" className="ms-12"></input>
            </td>
            <td className="w-2/12 px-6 py-4 whitespace-nowrap">
              <Link to="/userprofile/1234567890" className="text-blue-600 hover:text-blue-700">
                Firstname Lastname
              </Link>
            </td>
            <td className="w-3/12 px-6 py-4 whitespace-nowrap">
              <Link to="/userprofile/1234567890" className="text-blue-600 hover:text-blue-700">
                1234567890
              </Link>
            </td>
            <td className="w-2/12 px-6 py-4 whitespace-nowrap">
             <a href="/proof/9876543210" target="_blank" rel="noopener noreferrer" 
               className="inline-block text-blue-600 hover:text-blue-700">
               See Proof
            </a>
            </td>
            <td class="w-4/12 px-6 py-4 whitespace-nowrap">
              <div class="grid-column">
                <div class="flex items-center space-x-4">
                  <a href="#" class="text-blue-400 hover:text-blue-600"> <PiStudentFill size={25}/></a>  {/*student*/}
                  <a href="#" class="text-lime-500 hover:text-lime-700"> <MdOutlineWork size={25}/></a>   {/*employee*/}
                  <a href="#" class="text-red-500 hover:text-red-700"> <IoIosCloseCircle size={25}/></a>   {/*deny*/}
                </div>
              </div>
          
        </td>
          </tr>
    </tbody>
    <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="w-1/12">
              <input type="checkbox" className="ms-12"></input>
            </td>
            <td className="w-2/12 px-6 py-4 whitespace-nowrap">
              <Link to="/userprofile/1234567890" className="text-blue-600 hover:text-blue-700">
                Firstname Lastname
              </Link>
            </td>
            <td className="w-3/12 px-6 py-4 whitespace-nowrap">
              <Link to="/userprofile/1234567890" className="text-blue-600 hover:text-blue-700">
                1234567890
              </Link>
            </td>
            <td className="w-2/12 px-6 py-4 whitespace-nowrap">
             <a href="/proof/9876543210" target="_blank" rel="noopener noreferrer" 
             className="inline-block text-blue-600 hover:text-blue-700">
              See Proof
              </a>
             </td>
           <td class="w-4/12 px-6 py-4 whitespace-nowrap">
           <div class="grid-column">
                <div class="flex items-center space-x-4">
                  <a href="#" class="text-blue-400 hover:text-blue-600"> <PiStudentFill size={25}/></a>  {/*student*/}
                  <a href="#" class="text-lime-500 hover:text-lime-700"> <MdOutlineWork size={25}/></a>  {/*employeee*/}
                  <a href="#" class="text-red-500 hover:text-red-700"> <IoIosCloseCircle size={25}/></a> {/*deny*/}
                </div>
              </div>
        </td>
          </tr>
    </tbody>


  </table>
        

         {/* Second table */}
         <h2 className="text-black font-bold text-2xl mt-6 ml-6">Privileges</h2>
         <table class="table-auto  mt-6 w-full ">
    <thead>
      <tr class="bg-teal-950"> 
        <th class="w-1/12">
          <input type="checkbox" class="mr-4"></input>
        </th>
        <th class="w-2/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
          Student Name
        </th>
        <th class="w-3/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
          ID Number
        </th>
        <th class="w-2/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
          Proof
        </th>
        <th class="w-4/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
          Action
        </th>
      </tr>
    </thead>

    
    <tbody>
      <tr class="border-b border-gray-200 hover:bg-gray-100">
        <td class="w-1/12">
          <input type="checkbox" class="ms-12"></input>
        </td>
        <td class="w-2/12 px-6 py-4 whitespace-nowrap">Firstname Lastname</td>
        <td class="w-3/12 px-6 py-4 whitespace-nowrap">1234567890</td>
        <td className="w-2/12 px-6 py-4 whitespace-nowrap">
        <a href="/proof/9876543210" target="_blank" rel="noopener noreferrer" 
        className="inline-block text-blue-600 hover:text-blue-700">
         See Proof
         </a>
        </td>
        <td class="w-4/12 px-6 py-4 whitespace-nowrap">
          <div class="grid-column">
            <div class="flex items-center space-x-4">
            <a href="#" class="text-blue-400 hover:text-blue-700"><FaUnlock size={25}/></a> {/*Unlock */}
            <a href="#" class="text-red-500 hover:text-red-700"> <IoIosCloseCircle size={25}/></a> {/*deny*/}
            </div>
          </div>
        </td>
      </tr>
      <tr class="border-b border-gray-200 hover:bg-gray-100">
        <td class="w-1/12">
          <input type="checkbox" class="ms-12"></input>
        </td>
        <td class="w-2/12 px-6 py-4 whitespace-nowrap">Firstname Lastname</td>
        <td class="w-3/12 px-6 py-4 whitespace-nowrap">9876543210</td>
        <td class="w-2/12 px-6 py-4 whitespace-nowrap">None</td>
        <td class="w-4/12 px-6 py-4 whitespace-nowrap">
        <div class="grid-column">
            <div class="flex items-center space-x-4">
            <a href="#" class="text-blue-400 hover:text-blue-700"><FaUnlock size={25}/></a> {/*Unlock */}
            <a href="#" class="text-red-500 hover:text-red-700"> <IoIosCloseCircle size={25}/></a> {/*deny*/}
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>




      </div>
    );
  }
