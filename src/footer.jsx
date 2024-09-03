import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>Name picker</h3>
        <p></p>
        <ul className="socials">
          <li><Link to="#"><i className="bi bi-twitter-x"></i></Link></li>
          <li><Link to="#"><i className="bi bi-youtube"></i></Link></li>
          <li><Link to="#"><i className="bi bi-instagram"></i></Link></li>
          <li><Link to="#"><i className="bi bi-github"></i></Link></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy; <Link to="#">M.Ali Iqbal Farozi</Link> </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
