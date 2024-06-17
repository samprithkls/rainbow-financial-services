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
        <div className='row why-content'>
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
        </div>
    </div>
    );
} 

export default Home;