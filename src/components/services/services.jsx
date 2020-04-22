import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from '../title/title';
import Service from '../service/service';

const services = [
    {
        id: 1,
        icon: <FaCocktail/>,
        title: 'Free cocktails',
        info: 'Consectetur  voluptatum consequatur in repudiandae culpa vero eos'
    },
    {
        id: 2,
        icon: <FaHiking/>,
        title: 'Endless Hiking',
        info: 'Consectetur  voluptatum consequatur in repudiandae culpa vero eos'
    },
    {
        id: 3,
        icon: <FaShuttleVan/>,
        title: 'Free Shuttle',
        info: 'Consectetur  voluptatum consequatur in repudiandae culpa vero eos'
    },
    {
        id: 4,
        icon: <FaBeer/>,
        title: 'Strongest Beer',
        info: 'Consectetur  voluptatum consequatur in repudiandae culpa vero eos'
    }
]

function Services(props) {
    return (
        <section 
            data-aos="fade"
            data-aos-easing="ease-in-sine" 
            data-aos-duration="1000"
            className="bg-gray-200"
        >
            <Title title={'Services'} />
            <div className="mt-8 p-4 grid grid-cols-2 md:grid-cols-4 gap-16">
                {services.map(service => (
                    <Service 
                        key={service.id} 
                        icon={service.icon}
                        title={service.title} 
                        info={service.info}
                    />
                ))}
            </div>
        </section>
    );
}

export default Services;