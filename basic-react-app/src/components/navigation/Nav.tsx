import {Routes, Route, Link} from 'react-router-dom';
import AboutMe from './AboutMe';
import Homepage from './Homepage';
import './../../index.css';
import Contact from './Contact';
import Weekday from '../conditional_routing/Weekday';
import Weekend from '../conditional_routing/Weekend';

export default function Nav() {
    const date = new Date().getDay();
    
    return (
        <div>
            <nav style={{backgroundColor:'pink'}}>
                <Link to='/' className='nav-item'>Homepage</Link>
                <Link to='/about-me' className='nav-item'>About Me</Link>
                <Link to='/contact' className='nav-item'>Contact Us</Link>
                <Link to='/today' className='nav-item'>Todays Job</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/about-me' element={<AboutMe />} />
                <Route path='/contact' element={<Contact />} />
                {(date >=1 && date < 6) ? 
                    <Route path='/today' element={<Weekday />} />
                : 
                <Route path='/today' element={<Weekend />} />
                }
            </Routes>
        </div>
    )
}