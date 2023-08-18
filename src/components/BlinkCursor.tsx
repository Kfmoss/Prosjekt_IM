import { useState } from "react";


const BlinkCursor = () => {

    const [title, setTitle]= useState(' _');

    setTimeout(()=>{
        if(title.includes(' _')){
            setTitle('  ');
            return;
        }
        setTitle(' _')
    }, 1000);

  return (
    <div>{title}</div>
  );
}

export default BlinkCursor