import { useState } from "react"




export const TrafficLight = () => {

  const [color, setColor] = useState({
    red: "redLight",
    yellow: "yellowLight",
    green: "greenLight"
  });




  return (


    <div className="contianer bg-black">

      <div className={color.red} onClick={() => setColor({
        red: "redLightOn",
        yellow: "yellowLight",
        green: "greenLight"

      })}>
      </div>



      <div className={color.yellow} onClick={() => setColor({
        red: "redLight",
        yellow: "yellowLightOn",
        green: "greenLight"

      })}>

      </div>

      <div className={color.green} onClick={() => setColor({
        red: "redLight",
        yellow: "yellowLight",
        green: "greenLightOn"

      })}>

      </div>








    </div>





  )
};
