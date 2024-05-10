import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import { RxCalendar } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import doubleRefund from '../Assets/double_refund_desktop_banner_final.webp';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import del from '../Assets/del-sm.webp';
import goa from '../Assets/goa-sm.webp';
import mumb from '../Assets/mumb-sm.webp';
import shimla from '../Assets/shimla-sm.webp';
import manali from '../Assets/manali-sm.webp';
import hyd from '../Assets/hyd-sm.webp';
import chennai from '../Assets/chennai-sm.webp';
import kolkata from '../Assets/kolkata-sm.webp';
import jaipur from '../Assets/jaipur-sm.webp';
import pune from '../Assets/pune-sm.webp';
import gurgrm from '../Assets/gurgrm-sm.webp';
import ahmd from '../Assets/ahmd-sm.webp';
import ramee from '../Assets/ramee-hotels-hp-new.png';
import fern from '../Assets/fern-hotels-hp-chain.png';
import EMTLORDS from '../Assets/EMTLORDS-26oct21-hp.png';
import clarks from '../Assets/the-clarks-hotel-hp.png';
import welcomheritage from '../Assets/welcomheritage-hp.png';
import bloom from '../Assets/bloom-hp.png';
import byke from '../Assets/byke-hp.png';
import justa from '../Assets/justa-hp-small2.png';
import royal from '../Assets/royal-orchid-hp.png';
import spree from '../Assets/spree-hotels-hp.png';
import cygnett from '../Assets/cygnett-hp.png';
import brij from '../Assets/brij-hp.png';
import clark from '../Assets/clarks-hp.png';
import EMTOT from '../Assets/EMTOT-26oct21-hp.png';
import hotelapp from '../Assets/hotel-app.webp';
import customers from '../Assets/happy-customers.svg';
import playstore from '../Assets/playstore.png';
import iosstore from '../Assets/iosstore.png';
import qrcode from '../Assets/qrcode.png';
import hotelicn from '../Assets/hotel-icn.svg';
import walleticn from '../Assets/wallet-icn.svg';
import ratingicn from '../Assets/rating-icn.svg';
import beachicn from '../Assets/beach-icn.svg';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";



function Hotels({setHotelList}) {

    const [cityList, setCityList] = useState([]);
    const [showCityList, setshowCityList] = useState(false);
    const [city, setCity] = useState('');
    const [selectedCheckInDate, setSelectedCheckInDate] = useState(new Date());
    const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(() => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    });
    const [showCalendarIn, setShowCalendarIn] = useState(false);
    const [showCalendarOut, setShowCalendarOut] = useState(false);
    const navigate = useNavigate()

    const handleCheckInDateSelect = (date) => {
        setSelectedCheckInDate(date);
        setShowCalendarIn(false)
        setShowCalendarOut(true)
        // Ensure check-out date is at least one day ahead of check-in date
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        setSelectedCheckOutDate(nextDay);
    };

    const handleCheckOutDateSelect = (date) => {
        setSelectedCheckOutDate(date);
        setShowCalendarOut(false)
    };

    useEffect(() => {
        const fetchAirports = async () => {
            try {
                const response = await fetch('https://academics.newtonschool.co/api/v1/bookingportals/hotel?', {
                    headers: {
                        projectID: '0sz0ysxowkcy'
                    }
                });
                const data = await response.json();
                // console.log(data.data.hotels);
                // Assuming data.data.hotels is an array of cities
                setCityList(data.data.hotels);
            } catch (error) {
                console.error('Error fetching airports:', error);
                // Handle error here, such as setting a state for error message
            }
        };

        fetchAirports();

    }, []);

    const handleCity = (location) => {
        setCity(location)
        setshowCityList(false)
        setShowCalendarIn(true)
    }

    

    const handleSearch = async () => {
        try {
            // if (!selectedDate) {
            //     alert("Please select the journey date");
            //     return;
            // } else if (!city) {
            //     alert("Please select city.");
            //     return;
            // } else if (!airportTo.iata_code) {
            //     alert("Please select destination.");
            //     return;
            // }

            ;
            const response = await axios.get(
                `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search=${encodeURIComponent(JSON.stringify({ location: city }))}`,
                {
                    headers: {
                        projectID: '0sz0ysxowkcy',
                    },
                }
            );

            console.log('Hotels search response:', response.data.data.hotels.slice(0,1));
            setHotelList(response.data.data.hotels.slice(0,1))
            navigate('/hoteldetails')
            // setFlightData(response.data.data);
            // setSource(airportFrom)
            // setDestination(airportTo)
            // if (response.data.data.flights.length > 0) {

            //     navigate("/flights");
            // }

        } catch (error) {
            console.error('Error searching for city:', error);
        }
    };

    return (
        <div>
            <div className=" bg-gradient-to-r from-blue-500 to-sky-400 py-12">
                <div className='w-9/12 mx-auto'>
                    <div className="flex justify-between items-center"></div>
                    <div className='flex mt-3 shadow-2xl '>
                        <div className='bg-white  rounded-s-md w-full flex '>
                            <div className='w-2/3 flex'>
                                <div onClick={() => setshowCityList(true)} className='py-2 pl-3 w-1/2  rounded-s-md border-r hover:bg-sky-100 cursor-pointer'>
                                    <p className='text-gray-500 text-xs'>Enter City name, Location or Specific hotel</p>
                                    <p className='font-bold text-2xl'>{city ? city.split(",")[0] : "Banglore"}</p>
                                    <p className='text-gray-500 text-xs'>{city ? city.split(",")[1] : "India"} </p>
                                </div>
                                <div className='flex w-1/2'>
                                    <div className='py-2 border-r w-1/2 pl-6 hover:bg-sky-100 cursor-pointer'>
                                        <p className='text-gray-500 text-xs'>Check-in</p>
                                        <div className='flex items-baseline gap-1'>
                                            <div className='flex items-baseline' onClick={() => setShowCalendarIn(!showCalendarIn)}>
                                                <p className='font-bold text-2xl'>{selectedCheckInDate.toLocaleDateString('en-US', { day: "numeric" })}</p>
                                                <p className=' ml-1 text-sm'>{selectedCheckInDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
                                            </div>
                                            <RxCalendar className='ml-1 text-gray-400 text-xl' />
                                            {showCalendarIn && (
                                                <div className='absolute'>
                                                    <DatePicker
                                                        selected={selectedCheckInDate}
                                                        onChange={handleCheckInDateSelect}
                                                        inline
                                                        minDate={new Date()}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <p className='text-gray-500 text-xs'>{selectedCheckInDate.toLocaleDateString('en-US', { weekday: 'long' })}</p>
                                    </div>

                                    <div className='w-1/2` py-2 hover:bg-sky-100 cursor-pointer pl-3'>
                                        <p className='text-gray-500 text-xs'>Check-out</p>
                                        <div className='flex items-baseline gap-1'>
                                            <div className='flex items-baseline' onClick={() => setShowCalendarOut(!showCalendarOut)}>
                                                <p className='font-bold text-2xl'>{selectedCheckOutDate.toLocaleDateString('en-US', { day: "numeric" })}</p>
                                                <p className=' ml-1 text-sm'>{selectedCheckOutDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
                                            </div>
                                            <RxCalendar className='ml-1 text-gray-400 text-xl' />
                                            {showCalendarOut && (
                                                <div className='absolute'>
                                                    <DatePicker
                                                        selected={selectedCheckOutDate}
                                                        onChange={handleCheckOutDateSelect}
                                                        inline
                                                        minDate={selectedCheckInDate}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <p className='text-gray-500 text-xs'>{selectedCheckOutDate.toLocaleDateString('en-US', { weekday: 'long' })}</p>
                                    </div>
                                </div>
                            </div>
                            <div  className='flex'>
                                


                                <div className=' py-2 hover:bg-sky-100 cursor-pointer pl-3'>
                                    <p className='text-gray-500 text-xs'>Price per Night</p>
                                    <div className='flex font-bold items-center'>
                                        <span className='text-2xl'>1</span><p className='text-sm'>Traveller(s)<FaChevronDown className='inline ml-2' /></p>
                                    </div>
                                    <p className='text-gray-500 text-xs'>FIRST</p>
                                </div>
                            </div>

                        </div>
                        <button onClick={handleSearch} className='bg-orange-500 rounded-e-md px-8 text-xl text-white font-bold'>SEARCH</button>

                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <img className='rounded-lg my-8 h-24' src={doubleRefund} />
            </div>

            <div className='flex flex-col justify-center my-6 w-9/12 mx-auto items-center'>
                <p className='font-bold text-3xl'>Book Hotels at Popular Destinations</p>
                <div className='w-full justify-between flex flex-wrap'>
                    <div className='flex mb-2 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={del} />
                        <div>
                            <p className='font-bold text-lg'>Delhi</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                    <div className='flex mb-2 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={goa} />
                        <div>
                            <p className='font-bold text-lg'>Goa</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                    <div className='flex mb-2 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={mumb} />
                        <div>
                            <p className='font-bold text-lg'>Mumbai</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                    <div className='flex mb-3 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={shimla} />
                        <div>
                            <p className='font-bold text-lg'>Mumbai</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                    <div className='flex mb-3 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={manali} />
                        <div>
                            <p className='font-bold text-lg'>Mumbai</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                    <div className='flex mb-3 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={hyd} />
                        <div>
                            <p className='font-bold text-lg'>Mumbai</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                    <div className='flex mb-3 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={chennai} />
                        <div>
                            <p className='font-bold text-lg'>Mumbai</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                    <div className='flex mb-3 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={kolkata} />
                        <div>
                            <p className='font-bold text-lg'>Mumbai</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                    <div className='flex mb-3 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={jaipur} />
                        <div>
                            <p className='font-bold text-lg'>Mumbai</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                    <div className='flex mb-3 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={pune} />
                        <div>
                            <p className='font-bold text-lg'>Mumbai</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                    <div className='flex mb-3 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={gurgrm} />
                        <div>
                            <p className='font-bold text-lg'>Mumbai</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                    <div className='flex mb-3 w-[365px] border-blue-400 my-5 rounded-lg p-1 pr-12 bg-sky-50 border'>
                        <img className='w-16 rounded-lg mr-3' src={ahmd} />
                        <div>
                            <p className='font-bold text-lg'>Mumbai</p>
                            <p className=' text-sm text-gray-600'>Hotels, Budget Hotels, 3 Star Hotels,
                                4 Star Hotels, 5 Star Hotels</p>
                        </div>
                    </div>
                </div>
                <div className='bg-blue-500 rounded-full text-white px-5 py-1 font-bold'>View More</div>
            </div>

            <div className='shadow-xl border p-6 w-9/12 mx-auto flex flex-col justify-center items-center rounded-md'>
                <p className='font-bold my-4 text-3xl'>Our Top Hotel Chains</p>
                <p className='text-gray-500'>EaseMyTrip has a wide range of luxury and budget-friendly hotel chain properties. We have picked the finest hotels in India with world-class amenities. We bring you not only a stay option, but an experience in your budget to enjoy the luxury. We make sure that all the hotels are safe, hygienic, comfortable, and easily approachable when it comes to location. Book your hotel with EaseMyTrip and don't forget to grab an amazing hotel deal to save huge on your stay.</p>

                <div className='flex my-6 flex-wrap gap-3'>
                    <div className='p-2 border w-[110px] rounded'>
                        <img src={ramee} className='rounded ' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={fern} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={EMTLORDS} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={clarks} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={welcomheritage} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={bloom} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={byke} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={justa} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={royal} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={spree} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={cygnett} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={brij} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={clark} className='rounded' />
                    </div>
                    <div className='p-2 w-[110px] border rounded'>
                        <img src={EMTOT} className='rounded' />
                    </div>

                </div>

            </div>

            <div className='bg-gray-100 my-10 flex items-center p-3'>
                <div className='flex w-1/2 ml-28 items-center'>
                    <div className='relative flex justify-center h-96 items-center w-1/2'>
                        <div className='w-80 h-80 rounded-full bg-blue-300'></div>
                        <img className='absolute h-80' src={hotelapp} />
                    </div>
                    <div className=' border-r p-2 border-black pr-10'>
                        <h className='font-bold text-xl my-3'>Highest-rated mobile app</h>
                        <div className='flex mt-10 gap-3'>
                            <div className='flex flex-col justify-between'>
                                <p className='text-5xl font-bold'>4.6</p>
                                <div className='flex text-sm text-gray-700'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                                <p className='text-md flex gap-1'><FaUser />4,83,459</p>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <p>5</p>
                                    <div className='ml-2 w-24 h-[14px] bg-green-500'></div>
                                </div>
                                <div className='flex items-center'>
                                    <p>4</p>
                                    <div className='ml-2 w-16 h-[14px] bg-green-400'></div>
                                </div>
                                <div className='flex items-center'>
                                    <p>3</p>
                                    <div className='ml-2 w-10 h-[14px] bg-yellow-500'></div>
                                </div>
                                <div className='flex items-center'>
                                    <p>2</p>
                                    <div className='ml-2 w-6 h-[14px] bg-orange-600'></div>
                                </div>
                                <div className='flex items-center'>
                                    <p>1</p>
                                    <div className='ml-2 w-2 h-4 bg-pink-500'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='font-bold text-xl mb-3'>Trusted By</p>
                    <img src={customers} />
                </div>
                <div className='ml-10'>
                    <p className='font-bold text-xl mb-3'>Download EaseMyTrip App</p>
                    <div className='border bg-green-100 w-2/3 p-2 rounded-md text-xs'>
                        <p>Save Up to Rs.5000 OFF on your first hotel booking Use Code: EMTGREET</p>
                    </div>
                    <div>
                        <p className='my-1'>For Hassle-Free Hotel Booking</p>
                        <div>
                            <div className='flex'>
                                <div>
                                    <img className='h-10 rounded-lg my-2' src={playstore} />
                                    <img className='h-10 rounded-lg' src={iosstore} />
                                </div>
                                <div>
                                    <img className='h-24 mt-1 ml-1' src={qrcode} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex w-9/12 mb-16 mx-auto flex-col justify-center items-center'>
                <p className='font-bold mb-16 text-3xl'>Why Book Hotels with EaseMyTrip.com?</p>
                <div className='w-full flex justify-between'>
                    <div className='relative border-2  pt-10 shadow-md w-[250px] rounded-2xl p-4 flex flex-col text-center justify-center items-center border-sky-100'>
                        <p className=' font-bold mb-3 text-lg'>Extensive Hotel Options</p>
                        <p className='text-gray-600 text-sm'>Best hotels available for different destinations to offer you the stay of a lifetime.</p>

                        <div className='p-3 absolute -top-8 bg-sky-100 rounded-full'>
                            <img className='w-10' src={hotelicn} />
                        </div>
                    </div>
                    <div className='relative border-2 pt-10 shadow-md w-[250px] rounded-2xl p-4 flex flex-col text-center justify-center items-center border-sky-100'>
                        <p className=' font-bold text-nowrap mb-3 text-lg'>Savings on Hotel Booking</p>
                        <p className='text-gray-600 text-sm'>Enjoy hotel bookings with the best offers and discounts and make your stay unforgettable.</p>

                        <div className='p-3 absolute -top-8 bg-sky-100 rounded-full'>
                            <img className='w-10' src={walleticn} />
                        </div>
                    </div>
                    <div className='relative border-2 pt-10 shadow-md w-1/4 rounded-2xl p-4 flex flex-col justify-center text-center items-center border-sky-100'>
                        <p className='  font-bold text-nowrap mb-3 text-lg'>Hotel Ratings</p>
                        <p className='text-gray-600 text-sm'>All our hotels have good ratings on Trip Advisor and are recommended by users.</p>

                        <div className='p-3 absolute -top-8 bg-sky-100 rounded-full'>
                            <img className='w-10' src={ratingicn} />
                        </div>
                    </div>
                    <div className='relative border-2 pt-5 shadow-md w-1/4 rounded-2xl p-4 flex flex-col justify-center text-center  items-center border-sky-100'>
                        <p className='  font-bold text-nowrap mb-3 text-lg'>Best Price</p>
                        <p className='text-gray-600 text-sm'>Get excellent hotels/resorts at the best prices to pamper your desires.</p>

                        <div className='p-3 absolute -top-8 bg-sky-100 rounded-full'>
                            <img className='w-10' src={beachicn} />
                        </div>
                    </div>
                </div>
            </div>

            {showCityList && (<div className='absolute border shadow-md top-64 left-48 w-96 bg-white rounded-lg p-3'>
                <div>
                    <p className='text-gray-500'>Popular Search In Domestic</p>
                    <div className='my-2 flex flex-wrap gap-1'>
                        <button onClick={() => handleCity('Delhi')} className='p-2 text-xs border rounded-md hover:text-white hover:bg-blue-400 border-blue-400 text-blue-400'>New Delhi</button>
                        <button onClick={() => handleCity('Ahmedabad')} className='p-2 text-xs border rounded-md hover:text-white hover:bg-blue-400 border-blue-400 text-blue-400'>Ahmedabad</button>
                        <button onClick={() => handleCity('Pune')} className='p-2 text-xs border rounded-md hover:text-white hover:bg-blue-400 border-blue-400 text-blue-400'>Pune</button>
                        <button onClick={() => handleCity('Mumbai')} className='p-2 text-xs border rounded-md hover:text-white hover:bg-blue-400 border-blue-400 text-blue-400'>Mumbai</button>
                        <button onClick={() => handleCity('Bangalore')} className='p-2 text-xs border rounded-md hover:text-white hover:bg-blue-400 border-blue-400 text-blue-400'>Bangalore</button>
                        <button onClick={() => handleCity('Jaipur')} className='p-2 text-xs border rounded-md hover:text-white hover:bg-blue-400 border-blue-400 text-blue-400'>Jaipur</button>
                        <button onClick={() => handleCity('Agra')} className='p-2 text-xs border rounded-md hover:text-white hover:bg-blue-400 border-blue-400 text-blue-400'>Agra</button>
                        <button onClick={() => handleCity('Hyderabad')} className='p-2 text-xs border rounded-md hover:text-white hover:bg-blue-400 border-blue-400 text-blue-400'>Hyderabad</button>
                    </div>
                </div>
                <div className=''>
                    <p className='mb-1 font-bold'>City list:</p>
                    <div className='overflow-y-scroll h-40'>
                        {cityList.map((city, index) => (
                            <p onClick={() => handleCity(city.location)} className='text-sm cursor-pointer text-gray-600 mb-1' key={index}>{city.location}</p>
                        ))}
                    </div>
                </div>
            </div>)}

        </div>
    )
}

export default Hotels
