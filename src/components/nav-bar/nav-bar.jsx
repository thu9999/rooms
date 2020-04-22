import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    const [open, setOpen] = useState(false);

    const handleToggleOpen = () => {
        setOpen(!open)
    };

    return (
        <React.Fragment>
            <div
                data-aos="fade-zoom-in" 
                data-aos-offset="200" 
                data-aos-easing="ease-in-sine" 
                data-aos-duration="1000"
                className="flex justify-between p-2 bg-white shadow-xl items-center"
            >
                <div className="flex items-center">
                    <div className="inline-block pr-8">
                        <NavLink to="/home">
                            <img src={logo} alt="logo"/>
                        </NavLink>
                    </div>

                    <div className="hidden md:inline-block pr-8">
                        <NavLink to="/home" className="font-semibold hover:text-purple-600 transition duration-200 ease-in-out" activeClassName="text-orange-600">Home</NavLink>
                    </div>

                    <div className="hidden md:inline-block pr-8">
                        <NavLink to="/rooms" className="font-semibold hover:text-purple-600 transition duration-200 ease-in-out" activeClassName="text-orange-600">Rooms</NavLink>
                    </div>
                </div>

                <button
                    onClick={handleToggleOpen} 
                    className="block md:hidden border-none outline-none focus:border-none focus:outline-none">
                    <FaAlignRight/>
                </button>
            </div>

            <div className={(open ? 'block' : 'hidden') + ' md:hidden'}>
                <ul>
                    <li className="block flex justify-center p-2 font-semibold">
                        <NavLink to="/Home" className="hover:text-purple-600 transition duration-200 ease-in-out" activeClassName="text-orange-600">Home</NavLink>
                    </li>
                    <li className="block flex justify-center p-2 font-semibold">
                        <NavLink to="/rooms" className="hover:text-purple-600 transition duration-200 ease-in-out" activeClassName="text-orange-600">Rooms</NavLink>
                    </li>
                </ul>
            </div>

        </React.Fragment>
    );
}

export default NavBar;