import React, { Fragment } from 'react'
import styled from '@emotion/styled';

const Titulo = styled.div`
    background-color:#20232A;
    padding: 20px;
    border-radius: 10px;
    text-align:center;
    text-transform:uppercase;
    width:100%;
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

export default Header
