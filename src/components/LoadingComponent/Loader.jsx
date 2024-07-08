import React from 'react'
import { Hourglass } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div><div className="flex items-center justify-center h-screen">
    <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={["#306cce", "#72a1ed"]}
    />
  </div></div>
  )
}

export default Loader