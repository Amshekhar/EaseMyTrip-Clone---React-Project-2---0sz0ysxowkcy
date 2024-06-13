import React, { useState } from 'react';
import { MdEventSeat } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SeatSelectionModal = ({ bus, onClose }) => {
    const navigate = useNavigate()
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seat) => {
        setSelectedSeats((prev) =>
            prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
        );
    };

    const handleContinue = () => {
        console.log('Selected Seats:', selectedSeats);
        // Move to the next step, e.g., Checkout Process
        onClose();
        navigate('/buspayment')
    };

    const [activeButtons, setActiveButtons] = useState(new Set());

  // Function to handle button click
  const handleButtonClick = (label) => {
    setActiveButtons((prev) => {
      const newActiveButtons = new Set(prev);
      if (newActiveButtons.has(label)) {
        newActiveButtons.delete(label);
      } else {
        newActiveButtons.add(label);
      }
      return newActiveButtons;
    });
  };

  // Array of button labels
  const upperButtons = ['1UC', '2UC', '3UC', '4UC', '5UC', '6UC', '1UB', '2UB', '3UB', '4UB', '5UB', '6UB', '2UA', '3UA', '4UA', '5UA', '6UA'];
  const lowerButtons = ['1E', '1G', '1A', '2E', '2G', '3E', '3G', '4E', '4G', '5E', '5G', '6E', '6G', '1D', '1F', '2D', '2F', '3D', '3F', '4D', '4F', '5D', '5F', '6D', '6F', '2LA', '3LA', '4LA', '5LA', '6LA'];


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="p-4 flex bg-white h-5/6 rounded-md gap-4">
                <div className='bg-gray-50 rounded-md overflow-y-scroll shadow-xl p-4 w-[80%]'>
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <h1 class="text-lg font-bold">Bangalore → Hyderabad</h1>
                            <p class="text-xs text-gray-500">IntrCity SmartBus (Washroom onboard)... 2+1(46)AC, Seater, Sleeper with Washroom, Luxury</p>
                            <p class="text-xs text-gray-500">Monday, 10 June 2024 (18:45–06:25)</p>
                        </div>
                    </div>

                    <div class="flex justify-between items-center mb-4">
                        <div class="flex space-x-4">
                            <div class="flex items-center text-xs">
                                <MdEventSeat alt="Booked" class="mr-1 w-6 h-6 border rounded text-gray-500" />
                                <span>Booked</span>
                            </div>
                            <div class="flex items-center text-xs">
                                <MdEventSeat alt="Available" class="mr-1 w-6 h-6 text-white bg-gray-600 rounded border" />
                                <span>Available</span>
                            </div>
                            <div class="flex items-center text-xs">
                                <MdEventSeat alt="Selected" class="mr-1 w-6 h-6 rounded border text-green-500" />
                                <span>Selected</span>
                            </div>
                            <div class="flex items-center text-xs">
                                <MdEventSeat alt="Reserved for Ladies" class="mr-1 rounded w-6 h-6 border text-pink-400" />
                                <span>Reserved for Ladies</span>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="flex space-x-2 p-2 items-center rounded-md bg-gray-200 mb-2">
                            <p className='font-bold text-sm'>Seat Price</p>
                            <button class="bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded">All</button>
                            <button class="bg-white text-sm font-semibold px-2 py-1 rounded">633</button>
                            <button class="bg-white text-sm font-semibold px-2 py-1 rounded">664</button>
                            <button class="bg-white text-sm font-semibold px-2 py-1 rounded">810</button>
                            <button class="bg-white text-sm font-semibold px-2 py-1 rounded">971</button>
                            <button class="bg-white text-sm font-semibold px-2 py-1 rounded">1150</button>
                        </div>
                        <p class="text-xs text-yellow-600">Select your desired seat to continue with your transaction.</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded mb-4">
                        <div className="flex justify-between mb-2">
                            <div className="text-xs font-bold">UPPER</div>
                        </div>
                        <div className="grid grid-cols-6 gap-2 text-xs">
                            {upperButtons.map((label) => (
                                <button
                                    key={label}
                                    className={`border p-2 rounded ${activeButtons.has(label) ? 'bg-green-500' : ''}`}
                                    onClick={() => handleButtonClick(label)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-100 p-4 rounded mb-4">
                        <div className="flex justify-between mb-2">
                            <div className="text-xs font-bold">LOWER</div>
                        </div>
                        <div className="grid grid-cols-12 gap-2 text-xs">
                            {lowerButtons.map((label) => (
                                <button
                                    key={label}
                                    className={`border p-2 rounded ${activeButtons.has(label) ? 'bg-green-500' : ''}`}
                                    onClick={() => handleButtonClick(label)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div class="flex justify-between items-center mb-4">
                        <div class="text-xs p-1 text-blue-600 flex items-center">
                            <MdEventSeat alt="Available" class="mr-1 w-6 h-6 text-white bg-gray-600 rounded border" />

                            <span>Above seats are indicative and not guaranteed. The bus operator reserves the right to alter them.</span>
                        </div>
                        <div class="text-xs text-pink-600 flex items-center">
                            <MdEventSeat alt="Reserved for Ladies" class="mr-1 rounded w-6 h-6 border text-pink-500" />

                            <span>Male cannot book the seat reserved for ladies.</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-4 w-[25%] rounded shadow-md">
                    <div class="mb-4">
                        <label class="block text-xs font-bold mb-2">Select a Boarding Point</label>
                        <select class="w-full text-xs p-2 border rounded">
                            <option>---Select---</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block text-xs font-bold mb-2">Select a Dropping Point</label>
                        <select class="w-full text-xs p-2 border rounded">
                            <option>---Select---</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block text-xs font-bold mb-2">Select Seats</label>
                        <div class="text-xs">
                            <p>Base Fare(+) ₹ 0</p>
                            <p>GST ₹ 0</p>
                            <p class="font-bold">Total Amount ₹ 0</p>
                            <p class="text-gray-500">(Including All Taxes)</p>
                        </div>
                    </div>
                    <button onClick={handleContinue} class="w-full bg-orange-500 text-white text-sm py-2 rounded">CONTINUE</button>
                </div>
            </div>
        </div>
    );
};

export default SeatSelectionModal;
