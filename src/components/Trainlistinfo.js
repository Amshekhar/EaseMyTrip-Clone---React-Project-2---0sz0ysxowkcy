import React, { useState } from 'react';
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

function Trainlistinfo({ trainData, setTrain, setCoach }) {
    const navigate = useNavigate();
    const [sortOption, setSortOption] = useState('priceLowToHigh');
    const [filters, setFilters] = useState({
        fareClasses: {
            SL: false,
            '3A': false,
            '2A': false,
            '1A': false,
        },
        trainTypes: {
            Rajdhani: false,
            Duranto: false,
            Others: false,
        },
    });

    const getCoachDescription = (coachType) => {
        switch (coachType) {
            case 'SL':
                return 'Sleeper Class';
            case 'EA':
                return 'Executive Class';
            case '2S':
                return 'Second Seater';
            case '1A':
                return 'First AC';
            case '3E':
                return 'Third Economy';
            case '2A':
                return 'Second AC';
            case 'CC':
                return 'Chair Car';
            default:
                return coachType;
        }
    };

    const coachMultipliers = {
        '2S': 1,
        'SL': 1.1,
        '3E': 1.3,
        'CC': 1.5,
        '2A': 1.7,
        '1A': 1.9,
        'EA': 2.1,
    };

    const handleTrainBooking = (baseFare, coachType, train, coach) => {
        setTrain(train);
        setCoach((prev) => ({
            ...prev,
            coach,
            finalFare: Math.round(baseFare * (coachMultipliers[coachType] || 1))
        }));
        navigate("/booktrain");
    };

    const calculateFare = (baseFare, coachType) => {
        return Math.round(baseFare * (coachMultipliers[coachType] || 1));
    };

    const sortTrainData = () => {
        switch (sortOption) {
            case 'priceLowToHigh':
                return [...trainData].sort((a, b) => a.fare - b.fare);
            case 'priceHighToLow':
                return [...trainData].sort((a, b) => b.fare - a.fare);
            case 'availabilityHighToLow':
                return [...trainData].sort((a, b) => {
                    const totalSeatsA = a.coaches.reduce((acc, coach) => acc + coach.numberOfSeats, 0);
                    const totalSeatsB = b.coaches.reduce((acc, coach) => acc + coach.numberOfSeats, 0);
                    return totalSeatsB - totalSeatsA;
                });
            case 'departureTimeHighToLow':
                return [...trainData].sort((a, b) => new Date(b.departureTime) - new Date(a.departureTime));
            default:
                return trainData;
        }
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const applyFilters = () => {
        let filteredData = [...trainData];

        // Apply fare class filters
        filteredData = filteredData.filter(train => {
            for (let fareClass in filters.fareClasses) {
                if (filters.fareClasses[fareClass] && train.coaches.some(coach => coach.coachType === fareClass)) {
                    return true;
                }
            }
            return false;
        });

        // Apply train type filters
        filteredData = filteredData.filter(train => {
            for (let trainType in filters.trainTypes) {
                if (filters.trainTypes[trainType] && train.trainType === trainType) {
                    return true;
                }
            }
            return false;
        });

        return filteredData;
    };

    const handleFilterChange = (category, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [category]: {
                ...prevFilters[category],
                [value]: !prevFilters[category][value],
            },
        }));
    };

    const filteredTrainData = applyFilters(); // Applying sorting

    return (
        <div>
            <div className='h-40 bg-blue-400'></div>
            <div className='flex w-[84%] pt-10 mx-auto justify-between'>
                <div className='w-[20%] bg-gray-100 h-52 border'>
                    <select
                        value={sortOption}
                        onChange={(e) => handleSortChange(e.target.value)}
                        className='p-1 text-sm w-full rounded-full border'
                    >
                        <option value='priceLowToHigh'>Price (Low to High)</option>
                        <option value='priceHighToLow'>Price (High to Low)</option>
                        <option value='availabilityHighToLow'>Availability (High to Low)</option>
                        <option value='departureTimeHighToLow'>Departure Time (High to Low)</option>
                    </select>
                    {/* Add filters here */}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-64 text-sm mt-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold">Filter By</h2>
                            <a href="#" className="text-blue-500 text-xs">Reset All</a>
                        </div>
                        <div className="mb-4">
                            <button className="w-full text-left flex justify-between items-center font-semibold mb-2">
                                Fare Classes
                                <span>▾</span>
                            </button>
                            <div className="pl-4">
                                {Object.keys(filters.fareClasses).map(fareClass => (
                                    <label key={fareClass} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            checked={filters.fareClasses[fareClass]}
                                            onChange={() => handleFilterChange('fareClasses', fareClass)}
                                            className="mr-2"
                                        />
                                        {getCoachDescription(fareClass)} ({fareClass})
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <button className="w-full text-left flex justify-between items-center font-semibold mb-2">
                                Train Types
                                <span>▾</span>
                            </button>
                            <div className="pl-4">
                                {Object.keys(filters.trainTypes).map(trainType => (
                                    <label key={trainType} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            checked={filters.trainTypes[trainType]}
                                            onChange={() => handleFilterChange('trainTypes', trainType)}
                                            className="mr-2"
                                        />
                                        {trainType}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[78%]'>
                    {trainData && trainData.map((train, index) => (
                        <div key={index} className='rounded mb-5 border'>
                            <div className='bg-blue-50 flex py-1 px-2 justify-between'>
                                <div className='text-sm'>NDLS -- PUNE</div>
                                <div className='text-xs'>Runs on: {train.daysOfOperation.join(', ')}</div>
                            </div>
                            <div className='flex border-b pb-5 my-5'>
                                <div className='w-1/5 px-3'>
                                    <div className='font-bold '>{train.trainName}</div>
                                    <div className='text-sm font-semibold border w-14 rounded bg-blue-50 p-1 '>{train.trainNumber}</div>
                                </div>
                                <div className='w-1/5'>
                                    <p className='font-bold text-xl'>{train.arrivalTime}</p>
                                    <p className='text-gray-500 font-semibold text-xs'>{train.source}</p>
                                    <p className='text-xs text-gray-500'>-</p>
                                    <p className='text-xs text-gray-500'></p>
                                </div>
                                <div className='w-2/5 flex flex-col justify-center items-center'>
                                    <p className='text-center text-xs text-gray-500'>{train.travelDuration}</p>
                                    <p className='text-xs relative my-3 justify-center text-gray-400 flex items-center'>
                                        <GoDotFill />-----------------------------------
                                        <GoDotFill />
                                        <PiAirplaneTakeoffLight className='text-center absolute border bg-white rounded-full h-7 border-gray-400 p-1 inline w-7' />
                                    </p>
                                    <div className='font-bold text-xs text-blue-600'>View Route</div>
                                </div>
                                <div className='w-1/5'>
                                    <p className='font-bold text-xl'>{train.departureTime}</p>
                                    <p className='text-gray-500 font-semibold text-xs'>{train.destination}</p>
                                    <p className='text-xs text-gray-500'>-</p>
                                    <p className='text-xs text-gray-500'></p>
                                </div>
                            </div>
                            <div className='flex m-2 justify-between'>
                                <p>Seat Availability</p>
                                <div className='flex gap-2'>
                                    <p>Quota</p>
                                    <select className='p-1 text-sm w-20 rounded-full border'>
                                        <option className='text-xs'>General</option>
                                        <option className='text-xs'>Senior Citizen</option>
                                        <option className='text-xs'>Ladies Quota</option>
                                        <option className='text-xs'>DP</option>
                                        <option className='text-xs'>Tatkal</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex'>
                                {train.coaches.map((coach, index) => (
                                    <div key={index} className='bg-orange-50 flex justify-center items-center flex-col p-2 m-1 w-40 rounded'>
                                        <p className='text-xs text-gray-500'>{getCoachDescription(coach.coachType)} {`(${coach.coachType})`}</p>
                                        <p className='text-sm font-bold'>₹{calculateFare(train.fare, coach.coachType)}</p>
                                        <p className='text-sm text-green-500'>AVL {coach.numberOfSeats}</p>
                                        <button onClick={() => handleTrainBooking(train.fare, coach.coachType, train, coach)} className='text-xs text-white bg-orange-600 rounded-full px-2'>Book Now</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Trainlistinfo;
