import "./List.scss";
import ArrowBackIosOutlined from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem  from "../listItem/ListItem";
import { useRef, useState } from "react";


export default function List() {

    const listRef = useRef();

    const[slideNumber,setSlideNumber] = useState(0);  //This slideNumber will be helpful for allowing to slide the container.
    const[isMoved,setIsMoved] = useState(false);


    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
        if (slideNumber ===0){
            setIsMoved(false);
        }
        //console.log(slideNumber);
    };

  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}> </ArrowBackIosOutlined>
                <div className="container" ref={listRef}>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </div>
            
            <ArrowForwardIosOutlinedIcon className="sliderArrow right" onClick={() => handleClick("right")}></ArrowForwardIosOutlinedIcon>
        </div>
    </div>
  )
}
