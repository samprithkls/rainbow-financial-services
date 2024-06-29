import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import '../assets/styles/home.css';
//import AnimatedLetters from './AnimatedLetters';
import '../assets/styles/animatedletters.css';

const Home = () => {
  /* const [letterClass, setLetterClass] = useState('text-animate');
  
  const wealthAniamtedText = " Wealth Partner.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  */
  return (
    <div className='row home' id='home'>
        {/* <div className='builders' style={{textWrap: 'balprettyance'}}>
            <span className="why-your">Your </span>
            <span className='animated-wealth-content'>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={wealthAniamtedText.split('')}
                idx={wealthAniamtedText.length}
                />
            </span>
        </div> */}
        {/* <div className='row why-content'>
            <div className='col-xl-3 col-lg-4 col-md-3 col-sm-12 col-xs-12 why-heading'>
                <TypeWriterEffect textStyle={{fontFamily: 'Inter', fontWeight:800}} startDelay={100} cursorColor='#DADADA' text='Why Invest 💸?' typeSpeed={100} loop={true} />
            </div>
            <div className='col-xl-9 col-lg-8 col-md-9 col-sm-12 col-xs-12'>
                <p className='why-text'>
                <span style={{fontWeight: '800', fontSize: '23px'}}>“</span>Investing is not about predicting the Future; it’s about preparing for it. 
                </p>
                <p className='why-text'>
                Focus on Risk Management and Long-term Value Creation.<span style={{fontWeight: '800', fontSize: '23px'}}>“</span>
                </p>
            </div>
        </div> */}
            <div className='row home-container'style={{marginTop: '1%', paddingLeft: '3.1%', fontSize:'125%'}}>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 line-container'><hr className='line'></hr></div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 line-container home-header'>Investor Zone</div>
                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 line-container'><hr className='line'></hr></div>
                <div className='row yellow-line'></div>
            </div>
    </div>
    );
} 

export default Home;