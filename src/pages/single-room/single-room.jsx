import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { FaTags, FaCheck } from 'react-icons/fa';
import { MdClose } from "react-icons/md";
import Room from '../../components/room/room';
import './single-room.style.scss';
import Payment from '../../components/payment/payment';

function SingleRoom(props) {
    const [ open, setOpen ] = useState(false);
    let { id } = useParams();
    let room = props.rooms.find(sub => sub.sys.id === id);
    function getIcon(value) {
        if(value) {
            return <FaCheck className="text-green-600 mr-2"/>;
        } else {
            return <MdClose className="text-red-600 mr-2"/>
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleBooking = () => {
        setOpen(true);
    }

    let modal = null;
    if(open) {
        modal = (
            <div className="payment-modal">
                <div className="payment-modal-content">
                    <Payment amount={room.fields.price} onClose={handleClose} />
                </div>
            </div>
        )
    };


    return (
        <div className="p-4">
            <Carousel
                showArrows={true}
                showStatus={true}
                showIndicators={true}
                showThumbs={true}
                infiniteLoop={true}
                autoPlay={true}
                stopOnHover={false}
                interval={5000}
            >
                {room.fields.images.map((image, index) => (
                   <div key={index}>
                       <img src={image.fields.file.url} alt="Single room"/>
                   </div> 
                ))}
            </Carousel>

                <div className="text-purple-800 text-2xl font-semibold uppercase tracking-widest">{room.fields.name}</div>
                <div className="flex justify-start items-center mt-4">
                    <div className="pr-2"><FaTags className="text-red-600"/></div>
                    <div className="font-semibold">${room.fields.price}</div>
                </div>

                <button 
                    onClick={handleBooking}
                    className="book-button mt-4 w-64 tracking-widest font-bold uppercase bg-red-600 text-white px-4 py-1 rounded focus:outline-none shadow-xl hover:shadow-2xl hover:bg-transparent hover:border-2 hover:bg-green-600 transition duration-300 ease-in-out"
                >
                    Book
                </button>

                <div className="mt-4 text-sm tracking-wide">{room.fields.description}</div>

                <div className="mt-4 text-sm font-semibold flex items-center">
                    {getIcon(room.fields.pets)} Pets
                </div>

                <div className="mt-4 text-sm font-semibold flex items-center">
                    {getIcon(room.fields.featured)} Featured
                </div>

                <div className="mt-4 text-sm font-semibold flex items-center">
                    {getIcon(room.fields.breakfast)} Breakfast
                </div>

                <div className="mt-4 text-sm font-semibold">Extras</div>
                <ul>
                    {room.fields.extras.map(extra => (
                        <li key={room.sys.id + Math.random()} className="text-sm mt-2 px-8 flex items-center">
                            <FaCheck className="text-green-600 mr-2"/>
                            {extra}
                        </li>
                    ))}
                </ul>

            <div className="mt-8 text-purple-800 text-2xl font-semibold uppercase tracking-widest">
                <div >Same type rooms</div>
                <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2 lg:grid-cols-4 mt-4">
                    {props.rooms.filter(r => r.fields.type === room.fields.type).map(sub => (
                        <Room key={sub.sys.id} room={sub} />
                    ))}
                </div>
            </div>

            {modal}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
}

export default connect(mapStateToProps)(SingleRoom)