import React from 'react';
import PropTypes from 'prop-types';
import './banner.style.scss';
import { NavLink } from 'react-router-dom';

Banner.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    link: PropTypes.string,
    buttonTitlte: PropTypes.string
};

Banner.defaultProps = {
    title: '',
    subTitle: '',
    link: '',
    buttonTitlte: ''
}

function Banner({title, subTitle, link, buttonTitlte}) {
    return (
        <div
            data-aos="fade-up" 
            data-aos-offset="200" 
            data-aos-easing="ease-in-sine" 
            data-aos-duration="1200"
            className="banner px-6 py-4 w-1/2 rounded">
            <div className="text-white capitalize text-4xl font-semibold block text-center tracking-wider">{title}</div>
            <div className="flex justify-center">
                <div className="w-32 border border-orange-600 rounded"></div>
            </div>
            <div className="mt-2 text-gray-300 block text-center capitalize font-semibold tracking-wider">{subTitle}</div>
            <NavLink to={link} className="flex justify-center mt-4">
                <button className="bg-purple-500 text-sm font-semibold tracking-wider rounded px-2 py-2 uppercase text-gray-200 hover:bg-pink-800 focus:border-none focus:outline-none transition duration-300 ease-in-out">
                    {buttonTitlte}
                </button>
            </NavLink>
        </div>
    );
}

export default Banner;