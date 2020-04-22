import React from 'react';
import PropTypes from 'prop-types';

Title.propTypes = {
    title: PropTypes.string
};

Title.defaultProps = {
    title: ''
}

function Title({title}) {
    return (
        <div className="block pt-12">
            <div className="text-center text-gray-600 font-bold text-xl tracking-widest">{title}</div>
            <div className="flex justify-center">
                <div className="w-16 border border-orange-600 rounded"></div>
            </div>
        </div>
    );
}

export default Title;