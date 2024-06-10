import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import liveStation from "../Assets/livestation.svg"
import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaTrainSubway } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";

function Booktrain() {
    const [adults, setAdults] = useState([]);
    const [children, setChildren] = useState([]);

    const handleAddAdult = () => {
        setAdults([...adults, { id: Date.now() }]);
    };

    const handleAddChild = () => {
        setChildren([...children, { id: Date.now() }]);
    };

    const handleRemoveAdult = (id) => {
        setAdults(adults.filter(adult => adult.id !== id));
    };

    const handleRemoveChild = (id) => {
        setChildren(children.filter(child => child.id !== id));
    };

    return (
        <div class="bg-sky-50 p-4">
            <div className='w-[78%] mx-auto'>
                <nav class="text-sm text-blue-600 mb-4">
                    <a href="#" class="hover:underline">1. Review & Travellers</a> &gt;
                    <a href="#" class="hover:underline">2. Payment</a>
                </nav>

                <div class="bg-white rounded-lg shadow-md w-[78%] pb-1 mb-4">
                    <div class="flex items-center mb-4 bg-sky-200 p-2 text-sm">
                        <img src="https://placehold.co/40x40" alt="IRCTC Logo" class="mr-2" />
                        <h2 class="text-xl">IRCTC User Verification</h2>
                    </div>
                    <div className='flex justify-between items-center mr-5'>
                        <div class=" p-4 items-center mb-4">
                            <p className='text-sm font-bold '>IRCTC User Id</p>
                            <div className='flex w-72'>
                                <input type="text" placeholder="User id is case sensitive" class=" border-gray-500 border p-1 flex-grow text-sm outline-none" />
                                <button class="bg-blue-500 text-white px-3 text-sm">Save</button>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div className='text-sm font-semibold mb-1'>Haven't registered with IRCTC?</div>
                            <div className='flex'>
                                <button class="border cursor-not-allowed border-blue-400 font-semibold text-sm text-blue-500 px-2 py-1 rounded-full mr-2">Create IRCTC Account</button>
                                <button class="border cursor-not-allowed border-blue-400 font-semibold text-sm text-blue-500 px-2 py-1 rounded-full">Forgot IRCTC UserID</button>
                            </div>
                        </div>
                    </div>

                    <div class="bg-yellow-100 p-2 px-4 text-xs mx-3 mb-3 rounded-full">
                        <span class="font-semibold">Important:</span> Kindly keep your IRCTC password handy. You will be asked to enter it after completing the booking process & payment.
                    </div>
                </div>

                <div class="bg-white rounded-lg shadow-md w-[78%]">
                    <div className='flex justify-between bg-blue-200 items-center p-2'>
                        <div class="flex items-center">
                            <FaTrainSubway alt="Train Logo" class="mr-2 text-xl border-2 p-1 w-8 h-8 border-black rounded-full" />
                            <h2 class="text-xl">Train Details</h2>
                        </div>
                        <div class="text-right text-xs">
                            <p class="text-red-600">Availability Status: GNWL37/WL17</p>
                            <a href="#" class="text-blue-600 hover:underline">Refresh Availability</a>
                        </div>
                    </div>
                    <div class=" p-4 mb-4">
                        <h3 class="text-lg">New Delhi - Howrah Jn | Sunday, 09 June</h3>
                        <div className='flex justify-between items-center mt-3'>
                            <div className='flex-col flex gap-1'>
                                <a href="#" class="text-blue-600 text-sm my-1 hover:underline">Hwh Rajdhani</a>
                                <p class="font-semibold mb-1 text-sm">Train No: <span >(12302)</span></p>
                                <p class="font-semibold mb-1 text-sm">Class: <span >First AC</span></p>
                                <p className='text-sm'>Quota: <span class="text-green-600">General</span></p>
                            </div>
                            <div class="relative justify-between items-center">
                                <div class="flex justify-between pt-3 px-5">
                                    <p class="text-2xl font-bold">16:50</p>
                                    <p class="text-2xl font-bold">09:55</p>
                                </div>
                                <p class="text-sm justify-center text-gray-400 flex items-center">
                                    <GoDotFill />
                                    ----------------------------------------------------------------------------------------------------------------------------------------
                                    <GoDotFill />
                                    <FaTrainSubway class="text-center absolute border bg-white rounded-full h-7 border-gray-400 p-1 inline w-7" />
                                </p>
                                <div class="flex justify-between text-gray-500">
                                    <div class="text-center">
                                        <p class="text-sm">NDLS</p>
                                        <p class="text-sm">Sunday, 09 June</p>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-sm">HWH</p>
                                        <p class="text-sm">Monday, 10 June</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="bg-yellow-50 p-4 flex items-center justify-between rounded-md mb-4 text-xs font-bold">
                        <div className='w-full'>
                            <label for="boarding-station" class="block mb-2">Select Boarding Station</label>
                            <select id="boarding-station" class="border outline-none p-2 rounded-full w-1/2">
                                <option>Boarding Stations</option>
                            </select>
                        </div>
                        <div class="flex justify-center relative items-center">
                            <div className='border-blue-400 -left-6 absolute border-2 rounded-full w-12 h-12 flex justify-center items-center bg-white '>
                                <img className='w-7' src={liveStation} />
                            </div>
                            <button class="bg-blue-500 text-white px-7 py-2 text-nowrap rounded-full">Route & Schedule</button>
                        </div>
                    </div>

                </div>
                <div class="space-y-4 w-[78%]">
                    <div class="rounded-lg shadow-md bg-white">
                        <div class="flex bg-blue-200 items-center space-x-2 p-2 mb-2">
                            <FaPhoneAlt aria-hidden="true" alt="phone" className=" text-xl border-2 p-1 w-8 h-8 border-black rounded-full" />
                            <h2 class=" font-semibold">Contact Information</h2>
                            <span class="text-sm text-gray-500">Your ticket will be sent to this email address</span>
                        </div>
                        <div class="grid p-4 grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium mb-1">Enter Your Email id <span class="text-red-500">*</span></label>
                                <div class="relative">
                                    <input type="email" class="w-full border rounded-lg p-2 text-sm" placeholder="Email" />
                                    <TfiEmail aria-hidden="true" alt="email"  class="absolute text-gray-300 text-2xl right-2 top-2" />
                                </div>
                                <p class="text-xs text-gray-500 mt-1">Your email id will be used only for sending Train related communication.</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">Enter Your Mobile Number <span class="text-red-500">*</span></label>
                                <div class="relative">
                                    <input type="tel" class="w-full border rounded-lg p-2 text-sm" placeholder="Mobile Number" />
                                    <FiPhone aria-hidden="true" alt="phone" class="absolute  text-gray-300 text-2xl right-2 top-2" />
                                </div>
                                <p class="text-xs text-gray-500 mt-1">Your Mobile number will be used only for sending Train related communication.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white pb-5 rounded-lg shadow-md">
                        <div className="flex p-2 bg-blue-200 items-center space-x-2 mb-2">
                            <MdOutlinePeopleAlt aria-hidden="true" alt="user" className="text-xl border-2 p-1 w-8 h-8 border-black rounded-full"/>
                            <h2 className="font-semibold">Traveller Information</h2>
                            <span className="text-sm text-gray-500">Name should be same as in Government ID proof</span>
                        </div>
                        <div className="p-4 mx-4 bg-yellow-100 rounded-lg mb-4">
                            <p className="text-xs text-yellow-700">Info! Food Choice is Optional in this train if You Opted for No Food Option then catering charge will not be added in Fare</p>
                        </div>
                        {adults.map((adult, index) => (
                            <div key={adult.id} className="bg-white p-4 shadow-lg rounded-lg m-5 space-y-4">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                    <h3 className="text-sm font-semibold">Adult {index + 1}</h3>
                                    <button className="ml-auto" onClick={() => handleRemoveAdult(adult.id)}>
                                        <RiDeleteBin6Line aria-hidden="true" alt="delete" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Gender</label>
                                        <select className="w-full border rounded-lg p-2 text-sm">
                                            <option>Gender</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Name</label>
                                        <input type="text" className="w-full border rounded-lg p-2 text-sm" placeholder="Enter Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Age</label>
                                        <input type="number" className="w-full border rounded-lg p-2 text-sm" placeholder="Age" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Berth Preference</label>
                                        <select className="w-full border rounded-lg p-2 text-sm">
                                            <option>No Preference</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Nationality</label>
                                        <select className="w-full border rounded-lg p-2 text-sm">
                                            <option>India</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Meal</label>
                                        <select className="w-full border rounded-lg p-2 text-sm">
                                            <option>Meal</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {children.map((child, index) => (
                            <div key={child.id} className="bg-white p-4 shadow-lg rounded-lg m-5 space-y-4">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                    <h3 className="text-sm font-semibold">Child {index + 1}</h3>
                                    <button className="ml-auto" onClick={() => handleRemoveChild(child.id)}>
                                        <RiDeleteBin6Line aria-hidden="true" alt="delete" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Gender</label>
                                        <select className="w-full border rounded-lg p-2 text-sm">
                                            <option>Gender</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Name</label>
                                        <input type="text" className="w-full border rounded-lg p-2 text-sm" placeholder="Enter Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Age</label>
                                        <input type="number" className="w-full border rounded-lg p-2 text-sm" placeholder="Age" />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <hr className='border mx-5' />
                        <div className="flex space-x-2 mt-4 ml-5">
                            <button className="bg-sky-50 text-blue-400 border font-bold border-blue-400 text-sm px-4 py-2 rounded-full" onClick={handleAddAdult}>+ Add Adult (+5 Yrs)</button>
                            <button className="bg-sky-50 text-blue-400 border font-bold border-blue-400 text-sm px-4 py-2 rounded-full" onClick={handleAddChild}>+ Add Child (0-4 Yrs)</button>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-2 p-4 bg-white rounded-lg shadow-lg">
                            <input type="checkbox" class="mt-1" />
                            <div>
                                <p class="font-semibold">Use GST for this booking <span class="text-xs font-normal">(OPTIONAL)</span></p>
                                <p class="text-xs">To claim credit of GST charged by Train/EaseMyTrip, please enter your company's GST number</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-2 p-4 bg-white rounded-lg shadow-lg">
                            <input type="checkbox" class="mt-1" />
                            <div>
                                <p class="font-semibold">Additional Preferences <span class="text-xs font-normal">(Optional)</span></p>
                            </div>
                        </div>

                        <div class="p-4 bg-yellow-100 rounded-lg flex justify-between items-center">
                            <div>
                                <p class="font-semibold text-sm">Travel Advisory for All Passengers</p>
                                <p class="text-xs">Please check Travel Advisory by relevant authorities.</p>
                            </div>
                            <button class="text-xs cursor-not-allowed text-blue-600 bg-blue-100 px-3 py-1 rounded-full">View Guidelines</button>
                        </div>

                        <div class="flex items-start space-x-2 p-4 rounded-lg">
                            <input type="checkbox" class="mt-1" />
                            <div>
                                <p class="text-xs">I understand and agree to the rules of this fare, and the <a href="#" class="text-blue-600  cursor-not-allowed">Terms & Conditions</a>, <a href="#" class=" cursor-not-allowed text-blue-600">Privacy Policy</a> and, <a href="#" class="text-blue-600  cursor-not-allowed">Cancellation and Refund Policy</a></p>
                            </div>
                        </div>

                        <div class="flex justify-center">
                            <button class="bg-orange-500 text-white px-20 py-2 text-lg rounded-full">Continue Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booktrain
