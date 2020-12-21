import React from 'react'
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 36px;
    border-radius: 10px;
    background-color: #fff;
    max-width:1200px;
    margin: 20px 10px;
    text-align:justify;

    h2 {
        font-family:'Langar', cursive;
        font-size: 40px;
        text-align: center;
        position: relative;
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 36px;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }

    @media (max-width: 900px) {
        h2{
            font-size: 36x;
        }
        p{
            font-size: 30px;
        }
    }

    @media (max-width: 600px) {
        h2{
            font-size: 30px;
        }
        p{
            font-size: 26px;
        }
    }

`;

function Frase({ frase }) {
    return (
        <>
            <ContenedorFrase>
                <h2> " {frase.quote} " </h2>
                <p> {frase.author} </p>
            </ContenedorFrase>
        </>
    )
}

export default Frase
