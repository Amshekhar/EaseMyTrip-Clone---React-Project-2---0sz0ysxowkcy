import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../pages/register';
import Login from '../pages/login';
import Footer from "./Footer";
import Flights from "./Flights";
import Train from "./Train";
import Trainlistinfo from "./Trainlistinfo";
import React, { useState } from 'react';
import Offers from "./Offers";
import Hotels from "./Hotels";
import Hoteldetails from "./Hoteldetails";
import Bookhotel from "./Bookhotel";
import Bookflight from "./Bookflight"
import Booktrain from "./Booktrain"
import Bus from "./Bus"
import Buseslist from "./Buseslist"
import Buspayment from "./Buspayment"

function App() {
  const [flightData, setFlightData] = useState([]);
  const [hotelList, setHotelList] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [hotelBookingData, setHotelBookingData] = useState();
  const [guestDetails, setGuestDetails] = useState({});
  const [flightDetails, setFlightDetails] = useState({});
  // const [passengerDetails, setPassengerDetails] = useState({});
  const [passengerDetails, setPassengerDetails] = useState({})
  const [trainData, setTrainData] = useState([]);
  const [busList, setBusList] = useState([]);


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home
          setPassengerDetails = {setPassengerDetails}
          setSource = {setSource}
          setDestination = {setDestination}
          setFlightData = {setFlightData}
        />} />
        <Route path="/flights" element={<Flights
          setFlightDetails={setFlightDetails}
          source={source}
          flightData={flightData}
          destination={destination}
        />} />

        <Route path="/bookflight" element={<Bookflight flightDetails={flightDetails} passengerDetails={passengerDetails}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/bus" element={<Bus setBusList={setBusList} />} />
        <Route path="/buseslist" element={<Buseslist busList={busList}  />} />
        <Route path="/buspayment" element={<Buspayment />} />
        <Route path="/railways" element={<Train setTrainData={setTrainData} />} />
        <Route path="/trainlistinfo" element={<Trainlistinfo  trainData={trainData} />} />
        <Route path="/booktrain" element={<Booktrain />} />

        <Route path="/hotels" element={<Hotels setHotelList={setHotelList} setGuestDetails={setGuestDetails}/>} />
        <Route path="/hoteldetails" element={<Hoteldetails hotelList={hotelList} setHotelBookingData={setHotelBookingData}/>} />
        <Route path="/bookhotel" element={<Bookhotel hotelBookingData={hotelBookingData} guestDetails={guestDetails}/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
