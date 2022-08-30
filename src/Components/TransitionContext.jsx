import React,{createContext} from 'react'
import Header from './Header';

export const animate  = createContext();
const transitionContext = () => {
  return (
    <animate.Provider>
        <Header/>
    </animate.Provider>
  )
}

export default transitionContext