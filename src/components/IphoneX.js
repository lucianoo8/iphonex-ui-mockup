import React ,{useState,useEffect}from 'react'
import Article from "./Article"
import "./IphoneX.css"

function IphoneX() {

    const [width, setWidth]   = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    if(width <="768"){
        return(
            <div className="viewport">
            <div className="content-wrapper">
                <Article/>
                </div>
            </div>
        )
     }
    else{
       return (<div className="iphone-x">

            <div className="cutter1"></div>
            <div className="cutter2"></div>
            <div className="cutter3"></div>
            <div className="cutter4"></div>
            <div className="rigth-btn"></div>
            <div className="left-btn1"></div>
            <div className="left-btn2"></div>
            <div className="left-btn3"></div>
            <div className="top-item-wrapper">
                <div className="speaker">
                    <div className="camera"></div>
                </div>
            </div>
                <div className="viewport">
                    <div className="content-wrapper">
                        <Article/>
                    </div>
                </div>
        </div>
      )
    }
}
export default IphoneX;
