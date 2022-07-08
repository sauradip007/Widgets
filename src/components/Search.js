import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () =>{
    //for search term in input
    const [term,setTerm] = useState('programming'); //setting a default search value as empty string returns empty array on useEffect call
    const [results,setResults] = useState([]) //state for fetching the result of the search term
    console.log(results);
    // console.log('I RUN EVERY TIME TERM CHANGES'); //called everytime useState variable "term" gets rendered

// useEffect(() =>{
// console.log('term was changed')

// //useEffect only allows to return a function
// return ()=>{
//     console.log('CLEANUP')
// }
// },[term])


    useEffect(()=>{
        // console.log('I RUN AFTER EVERY RENDER AND AFTER INITIAL RENDER')
        const search = async () =>{
            const response = await axios.get("https://en.wikipedia.org/w/api.php", {
              params: {
                action: "query",
                list: "search",
                format:"json",
                origin:"*",
                srsearch:term,
              },
            });
            setResults(response.data.query.search)
            //instead of this we could have used const{data} and setResults(data)
        }
        if(term && !results.length == 0)
        {
            //first search is being made
            search();
        }else{
             const timeoutId = setTimeout(() => {
               //set timeout returns a number(id) on being called , clearTimeout(id) clears the timer for the nxt call
               if (term) {
                 ///if term is not an empty string call search function
                 search();
               }
             }, 500);

             //Following the above example of useEffect we do the following:

             return () => {
               clearTimeout(timeoutId);
             };
      
        }
       
    },[term]);
    //mapping over the results array to create a list
    const renderedResults = results.map((result) =>{
        return (
          <div key={result.pageid} className="item">
            <div className="content">
              <div className="right floated content">
                <a
                  className="ui button"
                  href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >
                  Go
                </a>
              </div>
              <div className=" ui header">{result.title}</div>
              <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
          </div>
        );
    })
    return (
      <div>
        <div className="ui form">
          <div className="field">
            <label>Enter Search</label>
            <input
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              className="input"
            />
          </div>
        </div>

        <div className="ui relaxed divided list">{renderedResults}</div>
      </div>
    );
};
export default Search;