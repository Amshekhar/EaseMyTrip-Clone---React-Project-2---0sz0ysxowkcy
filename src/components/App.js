import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from '../pages/register';
import Login from '../pages/login';
import Footer from "./Footer";
import Flights from "./Flights";
import Train from "./Train";
import React, { useState } from 'react';
import Offers from "./Offers";
import Hotels from "./Hotels";
import Hoteldetails from "./Hoteldetails";
import Bookhotel from "./Bookhotel";

function App() {
  const [flightData, setFlightData] = useState([]);
  const [hotelList, setHotelList] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home
          setSource={setSource}
          setDestination={setDestination}
          setFlightData={setFlightData}
        />} />
        <Route path="/flights" element={<Flights
          source={source}
          flightData={flightData}
          destination={destination}
        />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/railways" element={<Train />} />
        <Route path="/hotels" element={<Hotels setHotelList={setHotelList} />} />
        <Route path="/hoteldetails" element={<Hoteldetails hotelList={hotelList} />} />
        <Route path="/bookhotel" element={<Bookhotel />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
