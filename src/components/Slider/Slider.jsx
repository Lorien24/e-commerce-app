import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

import './Slider.css'

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
`

const Image =  styled.img`
heigth: 100%;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction = "left">
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <div className='app__slider-wrapper'>
            <div className='app__slider-slide'>
                <div className='app__slider-slide_imgContainer'>
                    <Image src='https://i.ibb.co/XsdmR2c/1.png'/>
                </div>
                <div className='app__slider-slide_infoContainer'>

                </div>
            </div>
        </div>
        <Arrow direction = "right">
            <ArrowRightOutlinedIcon/>
        </Arrow>
        
    </Container>
  )
}

export default Slider