import React from 'react'
import logoWhite from '../Assets/EMTLogo_white.png'
import playStore from '../Assets/playstore.png'
import iosstore from '../Assets/iosstore.png'
import qrcode from '../Assets/qrcode.png'
import companies from '../Assets/companies.png'

function Footer() {
    return (
        <div className=' w-[99vw] bg-zinc-900 py-5 border-t-[13px] border-blue-500'>
            <div className=' mx-12 flex text-white border-b border-gray-600'>
                <div className='w-1/5 cursor-not-allowed'>
                    <p className=' font-semibold w-60 uppercase bg-blue-500 h border-b rounded-l-md border-gray-600 p-1 pl-3'>OUR OFFERINGS</p>
                    <p className=' font-semibold w-60 uppercase hover:bg-zinc-800 border-b border-gray-500 p-1 pl-3'>QUICK LINKS</p>
                    <p className=' font-semibold w-60 uppercase hover:bg-zinc-800 border-b border-gray-500 p-1 pl-3'>POPULAR DESTINATION</p>
                    <p className=' font-semibold text-nowrap w-60 uppercase hover:bg-zinc-800 border-b border-gray-500 p-1 pl-3'>INTERNATIONAL DESTINATION</p>
                    <p className=' font-semibold w-60 uppercase hover:bg-zinc-800 border-b border-gray-500 p-1 pl-3'>POPULAR AIRLINE</p>
                    <p className=' font-semibold w-60 uppercase hover:bg-zinc-800 border-b border-gray-500 p-1 pl-3'>CONNECT WITH US</p>
                    <p className=' font-semibold w-60 uppercase hover:bg-zinc-800 border-b border-gray-500 p-1 pl-3'>OFFERS</p>
                    <p className=' font-semibold w-60 uppercase hover:bg-zinc-800 border-b border-gray-500 p-1 pl-3'>EMT INSIGHTS</p>
                    <p className=' font-semibold w-60 uppercase hover:bg-zinc-800 border-b border-gray-500 p-1 pl-3'>MEDIA</p>
                    <p className=' font-semibold w-60 uppercase hover:bg-zinc-800 border-b border-gray-500 p-1 pl-3'>Investors Relation</p>
                    <p className=' font-semibold w-60 uppercase hover:bg-zinc-800  p-1 pl-3'>CURRENT OPENINGS</p>
                </div>
                <div className='w-4/5 px-7 pb-7 text-white '>

                    <p className='font-bold text-xl mb-3'>Make your travel easy with a wide range of products and services.</p>

                    <div className='flex gap-10 text-sm font-semibold'>
                        <ul className='w-1/4 flex cursor-not-allowed flex-col gap-2'>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Flights</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Bus</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Flight Status</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Check PNR Status</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Corporate Travel</li>
                        </ul>
                        <ul className='w-1/4 cursor-not-allowed flex flex-col gap-2'>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Hotel</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Cab</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Airline</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>EMT PRO</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Blog</li>
                        </ul>
                        <ul className='w-1/4 cursor-not-allowed flex flex-col gap-2'>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Trains</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Cruise</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Airports</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Activities</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Flight Check-in</li>
                        </ul>
                        <ul className='w-1/4 cursor-not-allowed flex flex-col gap-2'>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Holidays</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Charters</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Travel Guides</li>
                            <li className='hover:text-gray-400 cursor-not-allowed'>Travel Updates</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className='text-white  px-12 my-3 flex gap-20'>
                <div className='w-3/5'>
                    <img src={logoWhite} className='w-40' />
                    <p className='text-sm mt-3'>EaseMyTrip offers 'End to End' travel solutions including air tickets for more than 400 international and domestic airlines, hotel bookings for nearly 1 million hotels in India and abroad, cab booking with 4000+ cab operators, bus tickets with 2000+ bus operators, and railway tickets in India for all major cities.</p>
                </div>
                <div className='w-1/5'>
                    <p className='font-semibold text-lg'>Download EaseMyTrip App</p>
                    <hr className=' border-t-4 border-blue-500 w-10 my-3' />
                    <div className='flex gap-2'>
                        <img src={iosstore} className='w-32' />
                        <img src={playStore} className='w-32' />
                    </div>
                </div>
                <div className='w-1/5'>
                    <p className='font-semibold text-lg'>SCAN QR CODE</p>
                    <hr className=' border-t-4 border-blue-500 w-10 my-3' />
                    <div className='flex gap-2'>
                        <img src={qrcode} className='w-20' />
                    </div>
                </div>

            </div>
            <div className='flex justify-between text-white border-gray-600 border-t pt-2 px-12'>
                <p className='text-gray-500'>Copyright © 2024 EaseMyTrip</p>
                <div className='flex gap-2'>
                    <img src={companies} className=' h-9' />
                </div>
            </div>

        </div>
    )
}

export default Footer
