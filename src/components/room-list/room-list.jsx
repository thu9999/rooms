import React, { useState } from 'react';
import { connect } from 'react-redux';
import Room from '../room/room';

function RoomList(props) {
    const [ rooms, setRoom ] = useState(props.rooms);
    return (
        <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2 lg:grid-cols-4 mt-4">
            {rooms.map(room => <Room key={room.sys.id} room={room}/>)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
}

export default connect(mapStateToProps)(RoomList);