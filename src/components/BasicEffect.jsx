import {useEffect} from 'react'

const BasicEffect = () => {
    useEffect (() =>{
        console.log("BAsic effect")
    }, []);
  return (
    <div>
      <h1>Check th effect of the useEffect.</h1>
    </div>
  )
}

export default BasicEffect
