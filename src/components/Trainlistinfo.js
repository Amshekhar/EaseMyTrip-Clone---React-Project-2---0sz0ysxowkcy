import React from 'react'
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


function Trainlistinfo({ trainData }) {
    const navigate = useNavigate();
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
    const handleTrainBooking = ()=>{
        navigate("/booktrain")
    }
    // console.log(trainData);
    return (
        <div>
            <div className='h-40 bg-blue-400'></div>
            <div className='flex w-[84%] pt-10 mx-auto justify-between'>
                <div className='w-[20%] bg-gray-100 h-52 vorder'></div>
                <div className='w-[78%]'>
                    {trainData && trainData.map((train, index) => {
                        return (<div key={index} className='rounded mb-5 border'>
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
                                    <p className='text-xs relative my-3 justify-center text-gray-400 flex items-center'><GoDotFill />-----------------------------------<GoDotFill /><PiAirplaneTakeoffLight className='text-center absolute border bg-white  rounded-full h-7 border-gray-400 p-1 inline w-7  ' /></p>
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
                                        <option className='text-xs'>Genral</option>
                                        <option className='text-xs'>Senior Citizen</option>
                                        <option className='text-xs'>Ladies Qouta</option>
                                        <option className='text-xs'>DP</option>
                                        <option className='text-xs'>Tatkal</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex'>
                                {train && train.coaches.map((coach, index) => (
                                    <div key={index} className='bg-orange-50 flex justify-center items-center flex-col p-2 m-1 w-40 rounded'>
                                        <p className='text-xs text-gray-500'>{getCoachDescription(coach.coachType)} {`(${coach.coachType})`}</p>
                                        <p className='text-sm text-gray-500'>{coach.numberOfSeats}</p>
                                        <button onClick={()=> handleTrainBooking()} className='text-xs text-white bg-orange-600 rounded-full px-2'>Book Now</button>
                                    </div>
                                ))}
                            </div>
                        </div>)
                    })}

                </div>
            </div>

        </div>
    )
}

export default Trainlistinfo
