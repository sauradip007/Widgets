import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
    {
        label: 'Afrikaans',
        value:'af'
    },
    {
        label:'Arabic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    }
]
const Translate = () =>{
    const [language,setLanguage] = useState(options[0]);
    const[text,setText] = useState(''); //tracks what user is typing in the input
    return (
      <div className="ui container" style={{marginTop:10}}>
        <div className="ui form">
          <div className="field">
            <label>Enter text</label>
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>
        <Dropdown
          label="Select a Language"
          options={options}
          selected={language}
          onSelectedChange={setLanguage}
        />{" "}
        {/* The props provided should match the props given to the dropdown initially */}
        <hr />
        <h3 className="ui header">Output</h3>
        <Convert text={text} language={language}/>
        {/* We provide the current language and the current text being entered */}
      </div>
    );
}
export default Translate;
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM;