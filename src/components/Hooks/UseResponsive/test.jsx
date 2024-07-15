import React from 'react'
import UseWindowResize from '.'

const UseWindowResizeTest = () => {

    const windowSize = UseWindowResize();
    const{width, height} = windowSize;

  return (
    <div>
        <p>Use window size hook</p>
        <p>Width is {width}</p>
        <p>Height is {height}</p>
    </div>
  )
}

export default UseWindowResizeTest