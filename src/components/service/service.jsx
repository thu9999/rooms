import React from 'react';
import PropTypes from 'prop-types';

Service.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string
};

Service.defaultProps = {
    title: '',
    info: ''
}

function Service({icon, title, info}) {
    return (
        <div className="block">
            <div className="flex justify-center text-orange-600 text-2xl">{icon}</div>
            <div className="flex justify-center mt-4 font-bold text-black text-sm tracking-widest">{title}</div>
            <div className="flex justify-center mt-2">{info}</div>
        </div>
    );
}

export default Service;