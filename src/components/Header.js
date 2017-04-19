import React from 'react';

const Header = ({title}) => {
    return(
        <h1 className="Header text-center">
            {title}
        </h1>
        );
};

Header.propTypes = {
    title: React.PropTypes.string.isRequired
}

export default Header;