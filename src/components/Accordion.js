import React,{useState} from 'react';

const Accordion = (props) =>{
    const [activeIndex,setActiveIndex] = useState(null);
    const onTitleClick = (index) =>{
        // console.log('Title clicked',index);
        setActiveIndex(index);
    }
    const renderedItems = props.items.map((item,index)=>{
        const active = index === activeIndex ? 'active' : ''; //if index being clicked on is equal to the state variable then it is appended with a class name of active from semantic ui else empty string is returned
        return (
        <React.Fragment key={item.title}>
            <div className={`title ${active}`}
            onClick={()=> onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        );
    })
    return (
        <div className="ui styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>
            </div>       
    )
}
export default Accordion;