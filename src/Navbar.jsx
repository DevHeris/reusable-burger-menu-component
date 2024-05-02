import { useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const sidebarRef = useRef();

  function showSidebar() {
    sidebarRef.current.style.display = "flex";
  }

  function hideSidebar() {
    sidebarRef.current.style.display = "none";
  }

  return (
    <nav>
      <ul ref={sidebarRef} className="sidebar">
        <li onClick={hideSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
              <path
                fill="black"
                fillRule="evenodd"
                d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">Logo</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Forum</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Logo</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Blog</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Products</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">About</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Forum</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Login</a>
        </li>

        <li className="menu-button" onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17">
              <g fill="black" fillRule="evenodd">
                <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
