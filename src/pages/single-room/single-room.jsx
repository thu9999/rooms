import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

function SingleRoom(props) {
    let { id } = useParams();
    let room = props.rooms.find(sub => sub.sys.id === id);
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

                <div>{room.fields.name}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
}

export default connect(mapStateToProps)(SingleRoom)