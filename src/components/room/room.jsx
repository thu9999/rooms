import React from 'react';
import { FaTags } from 'react-icons/fa';
import './room.style.scss';
import { Link } from 'react-router-dom';

function Room(props) {
    return (
        <div 
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine" 
            data-aos-duration="1200"
            className="room-container flex flex-col justify-center mt-4 p-4 bg-white shadow-xl transition duration-500 ease-linear hover:shadow-2xl"
        >
            <div><img src={props.room.fields.images[0].fields.file.url} alt="feature room"/></div>
            <div className="text-center font-semibold text-gray-800 capitalize mt-2 tracking-widest">{props.room.fields.name}</div>
            <div className="flex justify-center items-center mt-2">
                <div className="pr-2"><FaTags className="text-red-600"/></div>
                <div className="text-sm text-gray-600">{`$${props.room.fields.price}`}</div>
            </div>

            <div className="hidden feature-button-container transition duration-300 ease-in-out">
                <Link to={`/single-room/${props.room.sys.id}`}>
                    <button className="feature-button transition duration-300 ease-in-out uppercase tracking-widest text-sm font-semibold text-gray-600 bg-orange-400 px-2 py-1 hover:bg-transparent border-2 border-orange-400 hover:text-orange-600">View details</button>
                </Link>
            </div>
        </div>
    );
}

export default Room;