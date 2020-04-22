import React, { useState } from 'react';
import { connect } from 'react-redux';
import Title from '../title/title';
import Room from '../room/room';

function FeatureRooms(props) {
    const [featuredRooms, setfeaturedRooms] = useState(() => {
        const roomsList = props.rooms.filter(room => room.fields.featured === true);
        return roomsList;
    });

    return (
        <section className="bg-white mt-4">
            <Title title={'Featured Rooms'}/>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 p-4">
                {featuredRooms.map(room => (
                   <Room key={room.sys.id}  room={room} />
                ))}
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps)(FeatureRooms);