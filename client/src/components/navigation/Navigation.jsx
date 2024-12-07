import './Navigation.css';
import { useNavigate } from 'react-router-dom';
import moveToTop from '../../utils/moveToTop.js';
import moveTo from '../../utils/moveTo.js';

function Navigation() {
  let navigate = useNavigate();
  let handleScroll = (sectionName) => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }

    if (sectionName === 'home') {
      moveToTop();
    } else {
      moveTo(sectionName)
    }
  };

  return (
    <nav className='navigation'>
      <ul>
        <li>
          <button className='current_page' onClick={() => handleScroll('home')}>Home</button>
        </li>
        <li>
          <button onClick={() => handleScroll('about')}>About</button>
        </li>
        <li>
          <button onClick={() => handleScroll('skills')}>Skills</button>
        </li>
        <li>
          <button onClick={() => handleScroll('services')}>Services</button>
        </li>
        <li>
          <button onClick={() => handleScroll('experience')}>Experience</button>
        </li>
        <li>
          <button onClick={() => handleScroll('projects')}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleScroll('contact')}>Contact</button>
        </li>
      </ul>
    </nav>

    {/* <div class='nav'>
    <link rel='icon' href='test.gif' type='image/gif'>
    <ul class='navigation'>
        <li class='navigation-items'><a href='../'>Home</a></li>
        <li class='navigation-items'><a href='../games'>Games</a></li>
        <li class='navigation-items'><a href='../anime'>Anime</a></li>
        <li class='navigation-items'><a href='../minecraft'>Minecraft</a></li>
        <li class='navigation-items'><a
                href='../redirect/index.html?redirect_uri=https://discord.gg/bob'>Discord</a></li>
        <li class='navigation-items'><a
                href='../redirect/index.html?redirect_uri=https://paypal.me/iangaming101hd'>Donate</a></li>
    </ul>
    </div> */}
  );
}

export default Navigation;
