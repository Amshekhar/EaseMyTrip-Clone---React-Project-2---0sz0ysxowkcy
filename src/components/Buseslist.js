import React, { useState } from 'react';
import { MdGpsFixed } from "react-icons/md";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { IoRibbonOutline } from "react-icons/io5";
import SeatSelectionPopup from './SeatSelectionPopup';  // Import the new component

function Buseslist({ busList }) {
    console.log(busList);
    const [selectedBus, setSelectedBus] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const openSeatSelection = (bus) => {
        setSelectedBus(bus);
        setShowPopup(true);
    };

    const closeSeatSelection = () => {
        setShowPopup(false);
        setSelectedBus(null);
    };

    const calculateArrivalTime = (departureTime, totalDuration) => {
        const [departureHours] = departureTime.split(':').map(Number);
        const [duration] = totalDuration.split(':').map(Number);
        const newTime = departureHours + duration;

        return newTime <= 24 ? newTime : newTime - 24;
    };

    return (
        <div className='bg-sky-50'>
            <div className='flex w-9/12 gap-5 pt-5 mx-auto'>
                <div className='w-[22%] bg-white h-screen border shadow-lg'></div>
                <div className='p-4 bg-white shadow-lg w-[78%] dark:bg-gray-800 rounded-lg'>
                    {busList && busList.length > 0 && busList.map((bus, index) => {
                        const arrivalTime = calculateArrivalTime(bus.departureTime, bus.arrivalTime);
                        return (
                            <div key={index} className="border rounded-md shadow-lg mb-5">
                                <div className="flex justify-between items-center mb-2 p-3">
                                    <div>
                                        <h2 className="font-bold">{bus.name}</h2>
                                        <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">{bus.type}</p>
                                        <div className="flex items-center mt-1">
                                            <div className="flex items-center text-green-500">
                                                <span className='border-green-500 flex items-end rounded border pr-1 text-[11px]'><FaStar alt="star" className="bg-green-500 text-white h-5 mr-1" />{bus.ratings}</span>
                                            </div>
                                            <span className="pr-1 ml-2 flex items-center text-[10px] bg-green-50 text-green-600 rounded border border-green-600"><IoRibbonOutline className='text-sm bg-green-500 text-white h-5 mr-1' />Recommended</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center pt-7">
                                        <div className="text-center mr-4">
                                            <p className="font-bold text-lg">{bus.departureTime}</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{bus.source}</p>
                                        </div>
                                        <div className="text-center mx-4">
                                            <FaArrowRight alt="arrow" className="w-4 h-4 mx-auto" />
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{bus.arrivalTime}</p>
                                        </div>
                                        <div className="text-center ml-4">
                                            <p className="font-bold text-lg">{arrivalTime}:00</p>
                                            <p className="text-xs">{bus.destination}</p>
                                        </div>
                                    </div>
                                    <div className="text-right pt-3">
                                        <p className="line-through text-xs text-gray-500 dark:text-gray-400">₹ {bus.fare}</p>
                                        <p className="text-red-500 font-bold text-lg">₹ {bus.fare}</p>
                                        <p className="text-[10px] text-green-700">BOOKNOW Applied</p>
                                    </div>
                                    <div className="ml-4">
                                        <button className="bg-orange-500 text-white px-4 py-2 rounded-full" onClick={() => openSeatSelection(bus)}>Select Seats</button>
                                        <p className="text-xs text-center text-gray-600 dark:text-gray-400 mt-1">{bus.seats} Seat(s) left</p>
                                    </div>
                                </div>
                                <div className="flex p-3 justify-between items-center bg-gray-50 border-t pt-2 mt-5 text-xs text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center space-x-2">
                                        {bus.amenities.map((amenity, index) => (
                                            <img key={index} src={`https://placehold.co/16x16?text=${amenity}`} alt={amenity} className="w-4 h-4" />
                                        ))}
                                        <span>{bus.amenities.length}+</span>
                                    </div>
                                    <div className="flex space-x-4">
                                        <span>Amenities</span>
                                        <span>Boarding & Dropping Points</span>
                                        <span>Cancellation Policy</span>
                                        <span>4 Photo</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MdGpsFixed alt="live-tracking" className="w-4 h-4 mr-1" />
                                        <span>Live Tracking</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {showPopup && <SeatSelectionPopup bus={selectedBus} onClose={closeSeatSelection} />}
        </div>
    );
}

export default Buseslist;
