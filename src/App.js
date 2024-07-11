import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Disclaimer from './components/Disclaimer';
import Disclosure from './components/Disclosure';
import PrivacyPolicy from './components/PrivacyPolicy';
import Kyc from './components/Kyc';
// import Mutual from './components/Mutual';
// import Insurance from './components/Insurance';
import News from './components/News';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    const [active, setActive] = useState('InvestorZone');

    const updateActiveTab = (newActiveTab) => {
        setActive(newActiveTab);
    };

    return (
        <div style={{backgroundColor:'rgb(252,252,252)'}}>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <BrowserRouter>
                <Navbar active={active} updateActiveTab={updateActiveTab} />
                <Routes>
                    <Route path='/' element={ <Main />} />
                    <Route path='/disclaimer' element={<Disclaimer />} />
                    <Route path='/disclosure' element = {<Disclosure/>} />
                    <Route path='/privacy-policy' element = {<PrivacyPolicy/>} />
                    <Route path='/kyc' element = { <Kyc/>} />
                    {/* <Route path = '/mutual-funds' element = { <Mutual/> } />
                    <Route path='/insurance' element = { <Insurance/> } /> */}
                    <Route path='/news' element = { <News/> } />
                </Routes>
                <Footer updateActiveTab={updateActiveTab} />
            </BrowserRouter>
        </div>
    );
}

export default App;