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
import { useNavigate } from 'react-router-dom';


function Flights({ setFlightDetails, source, destination, flightData }) {
  const [activeTab, setActiveTab] = useState('Finfo');
  const [selectedFlightIndex, setSelectedFlightIndex] = useState(null);
  const [filters, setFilters] = useState({
    nonstop: false,
    morningDeparture: false,
    indigo: false,
    priceRange: [160552, 178278],
  });
  const [sortOption, setSortOption] = useState(null);
  const navigate = useNavigate();

  const handleFlightDetailsClick = (index) => {
    setSelectedFlightIndex(index);
  };

  const handleFlightBooking = (flight) => {
    setFlightDetails(flight);
    navigate('/bookFlight');
  };

  let name = '';
  const getAirlineLogo = (flightID) => {
    const prefix = flightID.substring(0, 2);
    switch (prefix) {
      case '6E':
        name = 'Indigo';
        return E6;
      case 'AI':
        name = 'Air India';
        return AI;
      case 'SG':
        name = 'Spice Jet';
        return SG;
      case 'UK':
        name = 'Vistara';
        return vistara;
      case 'G8':
        name = 'Air India Express';
        return I5;
      default:
        return null;
    }
  };

  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  const handlePriceRangeChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: [parseInt(event.target.value, 10), prevFilters.priceRange[1]],
    }));
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const applyFiltersAndSort = (flights) => {
    // console.log(flights);
    let filteredFlights = flights;

    if (filters.nonstop) {
      filteredFlights = filteredFlights.filter((flight) => flight.stops === 0);
    }
    if (filters.morningDeparture) {
      filteredFlights = filteredFlights.filter((flight) =>
        parseInt(flight.departureTime.split(':')[0], 10) < 12
      );
    }
    if (filters.indigo) {
      filteredFlights = filteredFlights.filter((flight) => flight.flightID.startsWith('6E'));
    }
    filteredFlights = filteredFlights.filter(
      (flight) => flight.ticketPrice >= filters.priceRange[0] && flight.ticketPrice <= filters.priceRange[1]
    );

    if (sortOption === 'priceLowToHigh') {
      filteredFlights.sort((a, b) => a.ticketPrice - b.ticketPrice);
    } else if (sortOption === 'priceHighToLow') {
      filteredFlights.sort((a, b) => b.ticketPrice - a.ticketPrice);
    }

    console.log(filteredFlights);
    return filteredFlights;
  };

  const sortedFilteredFlights = applyFiltersAndSort(flightData);
  // console.log(flightData);


  return (
    <div className=' bg-sky-100'>
      <div className='flex pt-5 ml-44 '>
        <div className='mr-5 border w-2/12 h-96'>
          <div className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-xs'>
            <h2 className='text-sm font-bold mb-4'>FILTER</h2>
            <div className='mb-4'>
              <h3 className='text-sm font-bold mb-2'>Popular Filters</h3>
              <div className='flex items-center mb-2'>
                <input
                  type='checkbox'
                  id='nonstop'
                  className='form-checkbox h-4 w-4 text-blue-600'
                  checked={filters.nonstop}
                  onChange={() => handleFilterChange('nonstop')}
                />
                <label htmlFor='nonstop' className='ml-2'>
                  Nonstop
                </label>
              </div>
              <div className='flex items-center mb-2'>
                <input
                  type='checkbox'
                  id='morning-departure'
                  className='form-checkbox h-4 w-4 text-blue-600'
                  checked={filters.morningDeparture}
                  onChange={() => handleFilterChange('morningDeparture')}
                />
                <label htmlFor='morning-departure' className='ml-2'>
                  Morning Departure
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='indigo'
                  className='form-checkbox h-4 w-4 text-blue-600'
                  checked={filters.indigo}
                  onChange={() => handleFilterChange('indigo')}
                />
                <label htmlFor='indigo' className='ml-2'>
                  Indigo
                </label>
              </div>
            </div>
            <div className='mb-4'>
              <h3 className='text-sm font-bold mb-2'>Price Range</h3>
              <div className='flex items-center mb-2'>
                <input
                  type='range'
                  className='w-full'
                  min='160552'
                  max='178278'
                  value={filters.priceRange[0]}
                  onChange={handlePriceRangeChange}
                />
              </div>
              <div className='text-sm'>
                Rs. {filters.priceRange[0]} - Rs. {filters.priceRange[1]}
              </div>
            </div>
            <div>
              <h3 className='text-sm font-bold mb-2'>Sort By</h3>
              <select
                className='w-full p-2 border rounded-md'
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value=''>Select</option>
                <option value='priceLowToHigh'>Price: Low to High</option>
                <option value='priceHighToLow'>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className='border w-9/12'>
          <div className='flex gap-1 items-baseline p-1'>
            <img src={cheapest} />
            <p className='bg-emerald-500 rounded-full text-white font-semibold py-[2px] px-3 text-sm flex items-center'>Cheapest</p>
            <p className=' font-semibold text-xl '>Flights starting from </p>
          </div>
          <div className='flex-1'>
            {sortedFilteredFlights.map((flight, index) => (
              <div
                key={index}
                className='bg-white mt-2 mb-4 hover:shadow-xl cursor-pointer rounded-xl shadow-md'
              >
                <div className='flex text-xs p-1 gap-1 font-semibold items-center bg-gradient-to-r from-yellow-200 w-1/6 to-white'>
                  <img className='w-4' src={mealicon} alt='Meal Icon' />
                  <p>Enjoy Free Meals</p>
                </div>
                <div className='flex pt-2 px-7 gap-14 justify-between'>
                  <div className='flex w-5/12 justify-between items-start'>
                    <div className='flex gap-2 items-center'>
                      <img className='w-10' src={getAirlineLogo(flight.flightID)} alt='Airline Logo' />
                      <div>
                        <p className='text-xs'>{name}</p>
                        <p className='text-xs mt-1 text-gray-500'>{flight.flightID.substring(0, 5)}</p>
                      </div>
                    </div>
                    <div>
                      <p className='font-bold text-xl'>{flight.departureTime}</p>
                      <p className='text-sm text-gray-600'>{source.city}</p>
                    </div>
                    <div className='w-24'>
                      <p className='ml-4 text-gray-500'>0{flight.duration}h:00m</p>
                      <div className='relative'>
                        <hr className='border-t-1 border-gray-500' />
                        <IoSend className='absolute h-[7px] -right-1 -top-[3px]' />
                      </div>
                      <p className='ml-5 text-xs text-gray-500'>{flight.stops}-stops</p>
                    </div>
                  </div>
                  <div className='w-6/12 flex justify-between items-start'>
                    <div>
                      <p className='font-bold text-xl'>{flight.arrivalTime}</p>
                      <p className='text-sm text-gray-600'>{destination.city}</p>
                    </div>
                    <div className='flex flex-col items-start'>
                      <p className='font-bold text-2xl text-orange-600'>Rs {flight.ticketPrice}</p>
                      <button
                        onClick={() => handleFlightBooking(flight)}
                        className='bg-orange-600 text-white text-sm rounded-md px-4 py-2'
                      >
                        BOOK
                      </button>
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <LuAlarmClock
                      onClick={() => handleFlightDetailsClick(index)}
                      className='text-2xl'
                    />
                    <IoMdCloseCircle className='text-2xl' />
                  </div>
                </div>
                {selectedFlightIndex === index && (
                  <div className='ml-6'>
                    <div className='flex gap-10 pt-3'>
                      <div>
                        <button
                          className={`${activeTab === 'Finfo' ? 'border-b-2 border-orange-600' : ''
                            }`}
                          onClick={() => setActiveTab('Finfo')}
                        >
                          Flight Information
                        </button>
                      </div>
                      <div>
                        <button
                          className={`${activeTab === 'Fareinfo' ? 'border-b-2 border-orange-600' : ''
                            }`}
                          onClick={() => setActiveTab('Fareinfo')}
                        >
                          Fare Summary
                        </button>
                      </div>
                      <div>
                        <button
                          className={`${activeTab === 'Baggageinfo' ? 'border-b-2 border-orange-600' : ''
                            }`}
                          onClick={() => setActiveTab('Baggageinfo')}
                        >
                          Baggage Information
                        </button>
                      </div>
                    </div>
                    <div>
                      {activeTab === 'Finfo' && (
                        <div className='text-xs'>
                          <p>
                            <strong>Flight:</strong> {flight.flightID} {source.city} to {destination.city}
                          </p>
                          <p>
                            <strong>Departure:</strong> {flight.departureTime} from {source.airport}
                          </p>
                          <p>
                            <strong>Arrival:</strong> {flight.arrivalTime} at {destination.airport}
                          </p>
                        </div>
                      )}
                      {activeTab === 'Fareinfo' && (
                        <div className='text-xs'>
                          <p>
                            <strong>Base Fare:</strong> Rs {Math.round(flight.ticketPrice * 0.5)}
                          </p>
                          <p>
                            <strong>Taxes:</strong> Rs {Math.round(flight.ticketPrice * 0.3)}
                          </p>
                          <p>
                            <strong>Fees:</strong> Rs {Math.round(flight.ticketPrice * 0.2)}
                          </p>
                          <p>
                            <strong>Total:</strong> Rs {flight.ticketPrice}
                          </p>
                        </div>
                      )}
                      {activeTab === 'Baggageinfo' && (
                        <div className='text-xs'>
                          <p>
                            <strong>Cabin Baggage:</strong> 7kg
                          </p>
                          <p>
                            <strong>Check-in Baggage:</strong> 15kg
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Flights
