import React from "react";
import './styles.css'
import { Link } from "react-scroll";

const LastScreen = (props) => {
  const getNextSequence = (sequence) => {
    if(sequence === 20){
      return 1;
    };
    return sequence + 1;
  }
  return (
    <div id={Number(props.sequency)} className="screen-full" style={{background: props.bgColor, color: props.textColor}}>
      <div className="container last-screen-container">
        <div className="last-screen-img-div">
        </div>
        <img src={props.imageUrl} alt="simple gif" class="last-screen-img"/>
        <div className="overlay-div">
          <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>
          <footer>
              <Link
                onClick={() => window.open("https://drive.google.com/file/d/1QlNM_p-G3DTBsuxu3423-LyY3rcc-PLZ/view?usp=sharing", "_blank")}
                activeClass="active"
                to={getNextSequence(Number(props.sequency))}
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
                ignoreCancelEvents={true}
              >{props.btnText}</Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LastScreen;
