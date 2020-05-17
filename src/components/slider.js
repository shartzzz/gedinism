import React, { useState } from "react"

export default () => {
  let sliderArr = [1, 2, 3]

  const [x, setX] = useState(0)

  const goLeft = () => {
    console.log("TCL: goLeft -> x", x)
    setX(x + 100)
  }

  const goRight = () => {
    console.log("TCL: goRight -> x", x) 
    setX(x - 100);
  }

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        )
      })}
      <button id="goLeft" onClick={goLeft}>
        left
      </button>
      <button id="goRight" onClick={goRight}>
        right
      </button>
    </div>
  )
}
