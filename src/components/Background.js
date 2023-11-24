import React, {useEffect} from 'react';

function Background(){
    /*const canvas = React.useRef(null);
    const [scale, setScale] = React.useState({ x: 1, y: 1 });
    const scaleWidth = 500;
    const scaleHeight = 500;
    
    React.useEffect(() => {
        const currentCanvas = canvas.current;
        currentCanvas.addEventListener("resize", resized);
        return () => currentCanvas.removeEventListener("resize", resized);
    });

    React.useEffect(() => {
        draw(canvas.current, scale.x, scale.y);
    }, [scale] );

    const resized = () => {
        canvas.current.width = canvas.current.clientWidth;
        canvas.current.height = canvas.current.clientHeight;
        setScale({ x: canvas.current.clientWidth / scaleWidth, y: canvas.current.clientHeight / scaleHeight});
    };

    return(
        <canvas ref={canvas} className="" style={{ width: "100%", height: "100%", zIndex: "-1", position: "absolute"}} ></canvas>
    );
}

function draw(canvas, scaleX, scaleY) {
    const context = canvas.getContext("2d");
    context.scale(scaleX, scaleY);
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);  

    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(100,100);
    context.bezierCurveTo(200,100,200,100,200,20);
    context.stroke();

    // context.fillStyle = "red";
    // context.fillRect(50, 50, 100, 100)
    //draw content below
    
*/

return(
    <div>
        <img src="thnkrai/6-removebg-preview.png"className="-top-10 -z-10 absolute"/>
        
        
        {/* <img src="thnkrai/6-removebg-preview.png"className=" -top-100 -z-10 absolute"/>
        <img src="thnkrai/6-removebg-preview.png"className=" top-200 -z-10 absolute"/>
        <img src="thnkrai/6-removebg-preview.png"className=" top-300 -z-10 absolute"/>
        <img src="thnkrai/6-removebg-preview.png"className=" top-400 -z-10 absolute"/> */}
        
        <img src="thnkrai/5-removebg-preview.png"className="  -bottom-20 -z-10 absolute"/>
        <img src="thnkrai/7-removebg-preview.png"className=" -right-80 bottom-20 -z-10 absolute"/>
        
    </div>
);
}

export default Background;