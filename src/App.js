import React, {useState} from 'react';
import "./App.css"

function App(){
  const [searches, setSearches] = useState([])
  const [query, setQuery] = useState("")

  const handleClick=()=>{
    if(query==="")
      console.log("Enter your searches")
    else
      setSearches(searches=>searches.concat(query))
  }

  const updateQuery=({target})=>{
    setQuery(target.value)
  }
  const keyPressed=({key})=>{
    if(key==="Enter"){
      handleClick()
    }
  }

  const submitHandler=e=>{
    e.preventDefault()
  }
  
  const Search=({query})=><li>{query}</li>

  const ResetFunc = (forceUpdate) => {
    window.location.reload();
  }

  return(
    <div className="App">
      <h1>Search Items</h1>
      <div className="break"/>
      <h2>Previous Searches:</h2>
      <ul className="previousSearch">
        {searches.map((query,i)=>(
          <Search
            query={query}
            key={query+i}
          />
        ))}
      </ul>
      <div className="break"/>
      <form onsubmit={submitHandler}>
        <div>
          <input
          className="search-field-input"
          placeholder="Search anything"
          type="text"
          onChange={updateQuery}
          onKeyPress={keyPressed}
          />
          <button className="search-field-button" type="button" onClick={handleClick}>Search</button>
          <button className="search-field-button" type="button" onClick={ResetFunc}>Reset</button>
        </div>
      </form>
    </div>
  )

}
export default App;