import React, {useEffect, useState, useRef} from 'react';

const Dropdown = (props) =>{
    const [open,setOpen] = useState(false)
    const ref = useRef(); //returns the parent most element from the component i.e. ui form 
    useEffect(()=>{
        const onBodyClick = (event)=>{
            
            if(ref.current.contains(event.target)) //checks if element that was clicked was inside of the component 
            {
                return;//simply dont do anything
            }
        //   console.log(event.target) //gives reference to the dom element that was clicked on
           setOpen(false)
        }
        document.body.addEventListener("click",onBodyClick,{capture:true})

        return () =>{
            document.body.removeEventListener('click',onBodyClick)

        };//cleanup function , we dont want to call event listener when dropdown is removed from dom otherwise ref.current throws null error

    },[])
    const renderedOptions = props.options.map((option)=>{

        if(props.selected.value === option.value)
        {
            return null; //nothing renders where the list item is there before as it gets selected and moves up to the dropdown menu top
        }
        return(
            <div onClick = {()=>{
                
                props.onSelectedChange(option)}} key={option.value} className="item">
                {option.label}
            </div>
        )
    })
   console.log(ref.current);
   return (
    //JSX to build the dropdown
    <div ref={ref} className="ui form">
        <div className="field">
            <label className="label">{props.label}</label>
            <div onClick={()=>{
                
                setOpen(!open)}} className={`ui selection dropdown ${open ? "visible active" : ""}`}>
            <i className="dropdown icon"></i>
            <div className="default text">{props.selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
                {renderedOptions}
            </div>
            </div>
        </div>
    </div>
   )
}
export default Dropdown;