import { useEffect, useState } from "react";
import logo from "./assets/LGOI.png";
import ChartFillIcon from "./assets/Chart_fill.png";
import ChatIcon from "./assets/Chat.png";
import UserIcon from "./assets/User.png";
import CalendarIcon from "./assets/Calendar.png";
import SearchIcon from "./assets/Search.png";
import ChartIcon from "./assets/Chart.png";
import FolderIcon from "./assets/Folder.png";
import SettingIcon from "./assets/Setting.png";
import More from "./assets/mores.png";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard"); // State untuk menu aktif
  const navigate = useNavigate();
  const Menus = [
    { title: "Dashboard", src: ChartFillIcon },
    { title: "TV Series", src: ChatIcon },
    { title: "Search", src: SearchIcon, gap: true },
    { title: "Top Rated", src: ChartIcon },
    { title: "Up Coming", src: CalendarIcon },
    { title: "Now Playing", src: UserIcon },
    { title: "About Us", src: FolderIcon, gap: true },
  ];

  const handleSearchClick = () => {
    setActiveMenu("Search"); // Set menu aktif ke "Search"
    navigate('/search');
  };
  
  const handleSearchClick1 = () => {
    setActiveMenu("About Us"); // Set menu aktif ke "About Us"
    navigate('/AboutUS');
  };
  
  const handleSearchClick2 = () => {
    setActiveMenu("TV Series"); // Set menu aktif ke "TV Series"
    navigate('/Tv');
  };
  
  const scrollToUpComing = () => {
    setActiveMenu("Up Coming"); // Set menu aktif ke "Up Coming"
    const sectionElement = document.getElementById('upcoming');
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToDashboard = () => {
    setActiveMenu("Dashboard"); // Set menu aktif ke "Dashboard"
    navigate('/');
  };
  
  const scrollToTopRated = () => {
    setActiveMenu("Top Rated"); // Set menu aktif ke "Top Rated"
    const sectionElement = document.getElementById('toprated');
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToNowPlaying = () => {
    setActiveMenu("Now Playing"); // Set menu aktif ke "Top Rated"
    const sectionElement = document.getElementById('nowplaying');
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="aside">
      <div
        className={`${
          open ? "w-80" : "w-16 bg-dark-purple opacity-0.5"
        } bg-dark-purple h-screen pl-3.5 pt-8 relative duration-300 ${
          !open && "opacity-75"
        }`}
      >
        <img
          src={More}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="Toggle Button"
        />
        <div
        className={`${
          open ? "bg-dark-purple" : "bg-dark-purple backdrop-opacity-0"
        }`}
      ></div>
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
            alt="Logo"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Moviez
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${activeMenu === Menu.title && "bg-light-white"}`} // Tambahkan kelas CSS untuk menu aktif
              onClick={
                Menu.title === "Search" ? handleSearchClick : // Jika menu "Search" diklik, panggil fungsi handleSearchClick
                Menu.title === "About Us" ? handleSearchClick1 : // Jika menu "About Us" diklik, panggil fungsi handleSearchClick1
                Menu.title === "Up Coming" ? scrollToUpComing : // Jika menu "Up Coming" diklik, panggil fungsi scrollToUpComing
                Menu.title === "Dashboard" ? scrollToDashboard : // Jika menu "Dashboard" diklik, panggil fungsi scrollToDashboard
                Menu.title === "Top Rated" ? scrollToTopRated : // Jika menu "Top Rated" diklik, panggil fungsi scrollToTopRated
                Menu.title === "TV Series" ? handleSearchClick2 :  // Jika menu "TV Series" diklik, panggil fungsi handleSearchClick2
                Menu.title === "Now Playing" ? scrollToNowPlaying : null
              }
            >
              <img src={Menu.src} alt={Menu.title} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
