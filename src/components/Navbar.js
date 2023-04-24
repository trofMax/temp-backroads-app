// * Imgs imports
import logo from '../images/logo.svg';

import { pageLinks, socialLinks } from '../data';
// * Components
import PageLink from './PageLink';
import SocialLink from './SocialLink';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            // const { id, href, text } = link;
            return <PageLink key={link.id} {...link} className="nav-link" />;
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} {...link} className="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
