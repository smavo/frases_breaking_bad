import React, { Fragment } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Titulo = styled.div`
    background-color:#20232A;
    padding: 20px 0;
    border-radius: 10px;
    text-align:center;
    text-transform:uppercase;
    width:94vw;
    margin: 0 10px;
    color: #ffffff;

    h2{
        font-family: Arial, Helvetica, sans-serif;
        font-weight:bold;
        font-size: 43px;
    }

    @media (max-width: 900px) {
        h2{
            font-size: 40px;
        }
    }

    @media (max-width: 600px) {
        h2{
            font-size: 36px;
        }
    }
`

function Header({titulo}) {
    return (
        <Fragment>
            <Titulo>
            <h2>{titulo}</h2>
            </Titulo>
        </Fragment>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;
