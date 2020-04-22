import React from 'react';
import PropTypes from 'prop-types';
import './hero.style.scss';

Hero.propTypes = {
    url: PropTypes.string,
};

Hero.defaultProps = {
    hero: 'home-header',
}

function Hero({children, hero}) {
    return (
        <header className={"flex items-center justify-center bg-fixed bg-no-repeat bg-cover hero " + hero}>
            {children}
        </header>
    );
}

export default Hero;