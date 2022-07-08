import React, { useEffect, useState } from 'react';

const Route = ({path, children}) =>{

    const[currentPath,setCurrentPath] = useState(window.location.pathname);
//just to uodate the route pathname

    useEffect(() =>{
        //wiring up event listener to listen to change in route
        const onLocationChange = () =>{
            console.log('Location Changed!')
            setCurrentPath(window.location.pathname)
        };
        //set a state to change the path location name

        window.addEventListener('popstate',onLocationChange);

        return () =>{
            window.removeEventListener('popstate',onLocationChange)
        }
    },[])
    return currentPath === path ? children : null

}

export default Route;