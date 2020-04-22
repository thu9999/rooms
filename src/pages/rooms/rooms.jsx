import React from 'react';
import Hero from '../../components/hero/hero';
import './rooms.style.scss'
import Banner from '../../components/banner/banner';
import Title from '../../components/title/title';
import RoomList from '../../components/room-list/room-list';

function Rooms() {
    return (
        <React.Fragment>

            <Hero children={null} hero={'rooms-header'}>
                <Banner 
                    title={'Our rooms'} 
                    subTitle={''}
                    link={'/home'}
                    buttonTitlte={'Go home'}
                />
            </Hero>

            <Title title={'Search rooms'}/>

            <RoomList />
        </React.Fragment>
    );
}

export default Rooms;