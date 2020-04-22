import React from 'react';
import './home.style.scss';
import Hero from '../../components/hero/hero';
import Banner from '../../components/banner/banner';
import Services from '../../components/services/services';
import { connect } from 'react-redux';
import FeatureRooms from '../../components/feature-rooms/feature-rooms';

function Home(props) {
    return (
        <React.Fragment>
            <Hero hero={'home-header'} className="flex items-center justify-center">
                <Banner 
                    title={'Luxurious rooms'} 
                    subTitle={'Deluxe rooms starting at $299'}
                    link={'/rooms'}
                    buttonTitlte={'our rooms'}
                />
            </Hero>

            <Services />

            <FeatureRooms/>
            
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Home);