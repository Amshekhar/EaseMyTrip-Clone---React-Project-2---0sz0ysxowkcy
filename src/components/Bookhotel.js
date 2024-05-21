import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GrNext } from "react-icons/gr";

function Bookhotel(hotelBookingData) {
    const navigate = useNavigate();

    // console.log(hotelBookingData.hotelBookingData.name);
    return (
        <div className='bg-sky-50 '>
            <div className='w-11/12 mx-auto py-5'>
                <p className='text-sm'>1. Review and Travellers <GrNext className='inline' /> 2. Payment</p>
                <div className='flex justify-between'>
                    <div className='w-[70%] p-3 bg-white shadow rounded'>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-xl'>{hotelBookingData.hotelBookingData.name}</p>
                            <p onClick={() => navigate('/hoteldetails')} className='text-sm text-blue-600'>[Change Hotel]</p>
                        </div>
                        <p className='text-xs text-gray-500'>{hotelBookingData.hotelBookingData.location}</p>
                        <div className=''>
                            <div>
                                <img className='rounded-md w-72' src={hotelBookingData.hotelBookingData.images[0]}/>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className='w-[20%] bg-white shadow rounded'></div>
                </div>
            </div>

        </div>
    )
}

export default Bookhotel
