import React from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav>
        <h2>
          <Link href="/">بلقيس حمدي</Link>
        </h2>
        <ul className="hide">
          <li>
            <Link
              href="About"
              style={
                router.pathname == '/About'
                  ? { color: '#FD7013' }
                  : { color: '#fff' }
              }
            >
              About
            </Link>
          </li>
          {/* <li>Education</li>
          <li>Skills</li>
          <li>Awards</li> */}
          <li>
            <Link
              href="Experience"
              style={
                router.pathname == '/Experience'
                  ? { color: '#FD7013' }
                  : { color: '#fff' }
              }
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="Projects"
              style={
                router.pathname == '/Projects'
                  ? { color: '#FD7013' }
                  : { color: '#fff' }
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="Contact"
              style={
                router.pathname == '/Contact'
                  ? { color: '#FD7013' }
                  : { color: '#fff' }
              }
            >
              Contact me
            </Link>
          </li>
        </ul>
        <div className="mobile_only">
          <Hamburger
            Direction="right"
            color="#FFF"
            onToggle={(toggled) => {
              if (toggled) {
                setShowMenu(true);
              } else {
                setShowMenu(false);
              }
            }}
          />
        </div>
      </nav>
      {showMenu && (
        <div className="mobile_menu">
          <ul>
            <li>About</li>
            <li>Education</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Awards</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
