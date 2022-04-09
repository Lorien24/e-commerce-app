import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../../data";

import "./Slider.css";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
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
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg}
`

const Image = styled.img`
  heigth: 80%;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick =(direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }
        else{
            setSlideIndex( slideIndex < 2 ? slideIndex +1 : 0)
        }
        
    }


  return (
    <Container>
      <Arrow direction="left" onClick={()=> handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item)=>(
        <Slide bg={item.bg} key={item.id}> 
        <div className="app__slider-slide_imgContainer">
          <Image src={item.img}/>
        </div>
        <div className="app__slider-slide_infoContainer">
          <h1 className="app__slider-h1">
              {item.title}
          </h1>
          <p className="app__slider-p">
            {item.desc}
            </p>
          <button type="button" className="app__slider-button">
              SHOW NOW
          </button>
        </div>
      </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=> handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;