import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Search from "./components/Search/Search.jsx";
import Support from "./components/Support/Support.jsx";
import Info from "./components/Info/Info.jsx";
import Travelers from "./components/Travelers/Travelers.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Lounge from "./components/Lounge/Lounge.jsx";
import Subscribe from "./components/Subscribers/Subscribe.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Search />
            <Support />
            <Info />
            <Lounge />
            <Travelers />
            <Subscribe />
            <FAQ />
            <Footer />
        </div>
    )
}
export default App;