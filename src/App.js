import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Header from './components/Header'
import Route from './components/Route'
const items = [
    {
        title:'What is React?',
        content:'React is a front end javascript framework'
    },
    {
        title:'Why use react ?',
        content:'React is a favourite JS library among engineers'
    },
    {
        title:'How do you use react ?',
        content:'We use react by creating components'
    },
];

//For dropdown
const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "blue",
  }
];
// const showAccordion = () =>{
//   if(window.location.pathname === '/')
//   {
//     return <Accordion items={items}/>
//   }

// }
// const showList = () =>{
//   if(window.location.pathname === '/list')
//   {
//     return <Search/>
//   }
// }
// const showDropdown = () =>{
//     if (window.location.pathname === "/dropdown") {
//       return <Dropdown />;
//     }
// }
// const showTranslate  = () =>{
//   if(window.location.pathname === '/translate')
//   {
//     return <Translate/>
//   }
// }
//Above functions contain very repetitive code, to condense this into a single func, we create a component

export default ()=>{
const [selected,setSelected] = useState(options[0])

    return (
      <div>
       <Header/>
        <Route path="/">
          <Accordion items={items} />
          {/* this is passed as "children" prop in Route */}
        </Route>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown label="Select a color"options={options} selected={selected} onSelectedChange={setSelected} />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    );
};