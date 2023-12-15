import {useState} from 'react'

function Saitou() {
    const [state, setState]=useState(false)
    const toggleState = () =>{
      if(
        state
      )setState(false);
      else{
        setState(true);
      }
    }

  return (
    <div className='Saitou'><img onClick={toggleState} src="./public/h2_image.PNG" alt="" />
    <img  onClick={toggleState} className={`${state ? '':'af_Saitou'}`} src="./public/after.png" alt="" /></div> 
      
  )
}

export default Saitou