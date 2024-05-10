import React, { useEffect, useState } from 'react'
import cheapest from '../Assets/chepest-icon.svg';
import mealicon from '../Assets/meal-icon-new.svg';
import vistara from '../Assets/vistara.png';
import E6 from '../Assets/6E.png';
import AI from '../Assets/AI.png';
import SG from '../Assets/SG.png';
import I5 from '../Assets/I5.png';
import { IoSend } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";

function Flights({ source, destination, flightData }) {
  const [activeTab, setActiveTab] = useState('Finfo');
  const [selectedFlightIndex, setSelectedFlightIndex] = useState(null);

  const handleFlightDetailsClick = (index) => {
    setSelectedFlightIndex(index);
  };

  let name = "";
  const getAirlineLogo = (flightID) => {
    const prefix = flightID.substring(0, 2);
    switch (prefix) {
      case '6E':
        name = "Indigo"
        return E6;
      case 'AI':
        name = "Air India"
        return AI;
      case 'SG':
        name = "Spice Jet"
        return SG;
      case 'UK':
        name = "Vistara"
        return vistara;
      case 'G8':
        name = "Air India Express"
        return I5;

    }
  };

  return (
    <div className=' bg-sky-100'>

      <div className='flex ml-44 '>
        <div className=' border w-2/12 h-96'></div>
        <div className='border w-9/12'>
          <div className='flex gap-1 items-baseline p-1'>
            <img src={cheapest} />
            <p className='bg-emerald-500 rounded-full text-white font-semibold py-[2px] px-3 text-sm flex items-center'>Cheapest</p>
            <p className=' font-semibold text-xl '>Flights starting from </p>
          </div>
          {flightData && flightData.map((flight, index) => (
            <div key={index} className='bg-white mt-2 mb-4 hover:shadow-xl cursor-pointer rounded-xl shadow-md'>
              <div className='flex text-xs p-1 gap-1 font-semibold items-center bg-gradient-to-r from-yellow-200 w-1/6 to-white'>
                <img className='w-4' src={mealicon} /><p>Enjoy Free Meals</p>
              </div>
              <div className='flex pt-2 px-7 gap-14 justify-between'>
                <div className='flex w-5/12 justify-between items-start'>
                  <div className='flex gap-2 items-center'>
                    <img className='w-10' src={getAirlineLogo(flight.flightID)} alt='Airline Logo' />
                    <div>
                      <p className='text-xs'>{name}</p>
                      <p className='text-xs mt-1 text-gray-500'>{(flight.flightID).substring(0, 5)}</p>
                    </div>
                  </div>
                  <div>
                    <p className=' font-bold text-xl'>{flight.departureTime}</p>
                    <p className='text-sm text-gray-600'>{source.city}</p>
                  </div>
                  <div className='w-24'>
                    <p className='ml-4 text-gray-500'>0{flight.duration}h:00m</p>
                    <div className=' relative'>
                      <hr className=' border-t-1 border-gray-500' />
                      <IoSend className=' absolute h-[7px] -right-1 -top-[3px]' />
                    </div>
                    <p className='ml-5 text-xs text-gray-500'>{flight.stops}-stops</p>
                  </div>
                </div>
                <div className='w-6/12 flex justify-between items-start'>
                  <div>
                    <p className=' font-bold text-xl'>{flight.arrivalTime}</p>
                    <p className='text-sm text-gray-600'>{destination.city}</p>
                  </div>
                  <div className='flex flex-col items-start'>
                    <p className='font-bold text-2xl text-orange-600'>₹ {flight.ticketPrice}</p>
                    <p className='text-blue-400 text-xs font-semibold py-1 border border-blue-400 rounded-full px-3'>+ More Fare</p>
                    <p className='font-semibold text-xs text-green-600'>Get Rs.400 OFF with BOOKNOW</p>
                  </div>
                  <button className=' bg-orange-500 font-bold text-white rounded-full py-1 px-3'>BOOK NOW</button>
                </div>
              </div>
              <div  onClick={() => handleFlightDetailsClick(index)} className='bg-gray-100 py-1 rounded-b-xl px-3 text-sm text-blue-500'>
                <p>Flight Details</p>
              </div>

             {selectedFlightIndex === index && <div>
                <div className='mx-2 bg-gray-100 items-center flex rounded-full mt-2 justify-between'>
                  <button
                    className={`  rounded-full  py-1 px-10 ${activeTab === 'Finfo' ? 'active bg-blue-500 text-white' : ''}`}
                    onClick={() => setActiveTab('Finfo')}
                  >Flight Information</button>

                  <button
                    className={` rounded-full py-1 px-10 ${activeTab === 'ruleDetails' ? 'active bg-blue-500 text-white' : ''}`}
                    onClick={() => setActiveTab('ruleDetails')}
                  >Fare Details & Rules </button>

                  <button
                    className={` rounded-full py-1 px-10 ${activeTab === 'BaggageInfo' ? 'active bg-blue-500 text-white' : ''}`}
                    onClick={() => setActiveTab('BaggageInfo')}
                  >Baggage Information</button>

                  <button
                    className={` rounded-full py-1 px-10 ${activeTab === 'CancellationInfo' ? 'active bg-blue-500 text-white' : ''}`}
                    onClick={() => setActiveTab('CancellationInfo')}
                  >Cancellation & Change Rule</button>
                  <IoMdCloseCircle className='text-xl mr-2' onClick={()=>setSelectedFlightIndex(false)}  />
                </div>
                {activeTab === 'Finfo' && <div className='my-2'>
                  <div className='flex gap-1 ml-3 items-center'>
                    <p className='text-sm'>{flight.source}</p>
                    <div className=' relative w-5'>
                      <hr className=' border-t-1 border-gray-500' />
                      <IoSend className=' absolute h-[7px] -right-1 -top-[3px]' />
                    </div>
                    <p className='text-sm'>{flight.destination}</p>
                  </div>

                  <div className='ml-5 mr-28 p-2'>
                    <div className='flex justify-between'>
                      <div className='flex'>
                        <img className='w-6 h-6 mr-6' src={getAirlineLogo(flight.flightID)} alt='Airline Logo' />
                        <div>
                          <p className='text-sm'>{name}</p>
                          <p className='text-xs mt-1 text-gray-500'>{(flight.flightID).substring(0, 5)}</p>
                        </div>
                      </div>

                      <div className='w-32'>
                        <p className=' font-bold text-xl'>{flight.departureTime}</p>
                        <p className='text-xs mt-1 font-semibold text-gray-500'>{source.city} ({source.iata_code})</p>
                        <p className='text-xs text-gray-500'>{source.name}</p>
                      </div>

                      <div className='flex flex-col justify-center items-center'>
                        <LuAlarmClock className='text-lg' />
                        <p className='text-xs'>0{flight.duration}h:00m</p>
                      </div>

                      <div className='w-32'>
                        <p className=' font-bold text-xl'>{flight.arrivalTime}</p>
                        <p className='text-xs mt-1 font-semibold text-gray-500'>{destination.city} ({destination.iata_code})</p>
                        <p className='text-xs text-gray-500 text-wrap'>{destination.name}</p>
                      </div>

                    </div>
                  </div>
                </div>}
                {activeTab === 'ruleDetails' && <div className='flex pt-3'>
                  <div class="bg-white p-4 text-xs w-1/3 mx-2 max-w-sm border">
                    <table class="w-full">
                      <tbody class="text-gray-800">
                        <tr class="border-b">
                          <td class="py-2">5 x Adult</td>
                          <td class="py-2 text-right">₹ 24800</td>
                        </tr>
                        <tr class="border-b">
                          <td class="py-2">3 x Child</td>
                          <td class="py-2 text-right">₹ 14880</td>
                        </tr>
                        <tr class="border-b font-semibold">
                          <td class="py-2">Total (Base Fare)</td>
                          <td class="py-2 text-right">₹ 39680</td>
                        </tr>
                        <tr class="border-b">
                          <td class="py-2">Total Tax</td>
                          <td class="py-2 text-right">₹ 6352</td>
                        </tr>
                        <tr>
                          <td class="py-2 font-semibold">Total (Fee & Surcharge)</td>
                          <td class="py-2 text-right">₹ 46032</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="p-3 w-2/3 text-xs border mr-2">
                    <div class="flex justify-between items-center mb-4">
                      <h1 class="text-sm font-semibold">Fare Rules</h1>
                      <button class=" text-green-500 border text-xs border-green-500 px-4 py-1 rounded-full">Refundable</button>
                    </div>
                    <div class="overflow-x-auto">
                      <table class="min-w-full table-auto  text-left text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                          <tr>
                            <th scope="col" class="py-1 px-6">Time Frame to cancel</th>
                            <th scope="col" class="py-1 px-6">Airline Fees per passenger</th>
                            <th scope="col" class="py-1 px-6">EMT Fees per passenger</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b">
                            <td class="py-1 px-6">Before scheduled departure time</td>
                            <td class="py-1 px-6">₹ 3000</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td class="py-1 px-6">Cancel Before 72 hours of departure time.</td>
                            <td class="py-1 px-6">₹ 3500</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                          <tr class="bg-white">
                            <td class="py-1 px-6">Cancel within 72 hours & before 4 hours of departure time.</td>
                            <td class="py-1 px-6">₹ 3500</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="mt-6 overflow-x-auto">
                      <table class="min-w-full table-auto text-sm text-left text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                            <th scope="col" class="py-1 px-6">Time Frame to reschedule</th>
                            <th scope="col" class="py-1 px-6">Airline Fees per passenger</th>
                            <th scope="col" class="py-1 px-6">EMT Fees per passenger</th>
                          </tr>
                        </thead>
                        <tbody className='text-xs'>
                          <tr class="bg-white border-b">
                            <td class="py-1 px-6">Before scheduled departure time</td>
                            <td class="py-1 px-6">₹ 2750</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td class="py-1 px-6">Reschedule before 72 hours of departure time.</td>
                            <td class="py-1 px-6">₹ 2750</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                          <tr class="bg-white">
                            <td class="py-1 px-6">Reschedule within 72 hours & before 4 hours of departure time.</td>
                            <td class="py-1 px-6">₹ 3250</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="mt-6  text-xs">
                      <h2 class=" font-semibold">Terms & Conditions</h2>
                      <ul class="list-disc pl-6 mt-2 text-gray-600">
                        <li>Total Rescheduling Charges Airlines Rescheduling fees Fare Difference if applicable + EMT Fees.</li>
                        <li>The airline cancel reschedule fees is indicative and can be changed without any prior notice by the airlines.</li>
                        <li>EaseMyTrip does not guarantee the accuracy of cancel reschedule fees.</li>
                        <li>Partial cancellation is not allowed on the flight tickets which are book under special round trip discounted fares.</li>
                        <li>Airlines doesnt allow any additional baggage allowance for any infant added in the booking.</li>
                        <li>In certain situations of restricted cases, no amendments and cancellation is allowed.</li>
                        <li>Airlines cancel reschedule should be reconfirmed before requesting for a cancellation or amendment.</li>
                      </ul>
                    </div>
                  </div>
                </div>}

                {activeTab === 'BaggageInfo' && <div className='w-full py-5'>
                  <div class="container mx-auto px-4 py-2 w-11/12 border">
                    <table class="min-w-full table-auto border-collapse border border-gray-300">
                      <thead className='bg-gray-100'>
                        <tr>
                          <th class="border border-gray-300 px-4 py-1 text-left text-sm font-medium">Airline</th>
                          <th class="border border-gray-300 px-4 py-1 text-left text-sm font-medium">Check-in Baggage</th>
                          <th class="border border-gray-300 px-4 py-1 text-left text-sm font-medium">Cabin Baggage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="border border-gray-300 px-4 py-1 text-xs">
                            <div class="flex items-center space-x-2">
                              <img className='w-7' src={getAirlineLogo(flight.flightID)} alt='Airline Logo' />
                              <div className=''>
                                <p className='text-xs'>{name}</p>
                                <p className='text-xs mt-1 text-gray-500'>{(flight.flightID).substring(0, 5)}</p>
                              </div>
                            </div>
                          </td>
                          <td class="border border-gray-300 px-4 py-1 text-xs">15kgs</td>
                          <td class="border border-gray-300 px-4 py-1 text-xs">7kg</td>
                        </tr>
                        <tr>
                          <td class="border border-gray-300 px-4 py-1 text-xs">
                            <div class="flex items-center space-x-2">
                              <img className='w-7' src={getAirlineLogo(flight.flightID)} alt='Airline Logo' />
                              <div className=''>
                                <p className='text-xs'>{name}</p>
                                <p className='text-xs mt-1 text-gray-500'>{(flight.flightID).substring(0, 5)}</p>
                              </div>
                            </div>
                          </td>
                          <td class="border border-gray-300 px-4 py-1 text-xs">15kgs</td>
                          <td class="border border-gray-300 px-4 py-1 text-xs">7kg</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="mt-4 text-xs">
                      <ul class="list-disc pl-5">
                        <li>Baggage information mentioned above is obtained from airline's reservation system, EaseMyTrip does not guarantee the accuracy of this information.</li>
                        <li>The baggage allowance may vary according to stop-overs, connecting flights, changes in airline rules, etc.</li>
                      </ul>
                    </div>
                  </div>
                </div>}

                {activeTab === 'CancellationInfo' && <div className='w-full py-5'>
                  <div class="p-3 w-2/3 text-xs border mx-auto">
                    <div class="flex justify-between items-center mb-4">
                      <h1 class="text-sm font-semibold">Fare Rules</h1>
                      <button class=" text-green-500 border text-xs border-green-500 px-4 py-1 rounded-full">Refundable</button>
                    </div>
                    <div class="overflow-x-auto">
                      <table class="min-w-full table-auto  text-left text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                          <tr>
                            <th scope="col" class="py-1 px-6">Time Frame to cancel</th>
                            <th scope="col" class="py-1 px-6">Airline Fees per passenger</th>
                            <th scope="col" class="py-1 px-6">EMT Fees per passenger</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b">
                            <td class="py-1 px-6">Before scheduled departure time</td>
                            <td class="py-1 px-6">₹ 3000</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td class="py-1 px-6">Cancel Before 72 hours of departure time.</td>
                            <td class="py-1 px-6">₹ 3500</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                          <tr class="bg-white">
                            <td class="py-1 px-6">Cancel within 72 hours & before 4 hours of departure time.</td>
                            <td class="py-1 px-6">₹ 3500</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="mt-6 overflow-x-auto">
                      <table class="min-w-full table-auto text-sm text-left text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                            <th scope="col" class="py-1 px-6">Time Frame to reschedule</th>
                            <th scope="col" class="py-1 px-6">Airline Fees per passenger</th>
                            <th scope="col" class="py-1 px-6">EMT Fees per passenger</th>
                          </tr>
                        </thead>
                        <tbody className='text-xs'>
                          <tr class="bg-white border-b">
                            <td class="py-1 px-6">Before scheduled departure time</td>
                            <td class="py-1 px-6">₹ 2750</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td class="py-1 px-6">Reschedule before 72 hours of departure time.</td>
                            <td class="py-1 px-6">₹ 2750</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                          <tr class="bg-white">
                            <td class="py-1 px-6">Reschedule within 72 hours & before 4 hours of departure time.</td>
                            <td class="py-1 px-6">₹ 3250</td>
                            <td class="py-1 px-6">₹ 300</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="mt-6  text-xs">
                      <h2 class=" font-semibold">Terms & Conditions</h2>
                      <ul class="list-disc pl-6 mt-2 text-gray-600">
                        <li>Total Rescheduling Charges Airlines Rescheduling fees Fare Difference if applicable + EMT Fees.</li>
                        <li>The airline cancel reschedule fees is indicative and can be changed without any prior notice by the airlines.</li>
                        <li>EaseMyTrip does not guarantee the accuracy of cancel reschedule fees.</li>
                        <li>Partial cancellation is not allowed on the flight tickets which are book under special round trip discounted fares.</li>
                        <li>Airlines doesnt allow any additional baggage allowance for any infant added in the booking.</li>
                        <li>In certain situations of restricted cases, no amendments and cancellation is allowed.</li>
                        <li>Airlines cancel reschedule should be reconfirmed before requesting for a cancellation or amendment.</li>
                      </ul>
                    </div>
                  </div>
                </div>}

              </div>}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Flights
