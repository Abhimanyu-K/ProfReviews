import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Paginator from "../Paginator/Paginator";
import AllProfile from "../AllProfile/AllProfile";
import "./Search.css";
function SearchBar({ placeholder,value }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [postLoading, setPostLoading] = useState(true);
  let domainArray = [];
  let data = [];
  let newFilter = [];
  let v = [];
<<<<<<< HEAD:Client/src/component/Search/SearchBar.js
  let domainResult = [];
  
  fetch("/search")
||||||| 78a714d:prof/src/component/Search/SearchBar.js
  fetch("http://localhost:4000/search")
=======
  let domainResult = [];
  fetch("http://localhost:4000/search")
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Search/SearchBar.js
    .then((res) => {
      return res.json();
    })
    .then((resData) => {
      data.push(
        resData.profiles.map((post) => {
          return { ...post };
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(data);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
<<<<<<< HEAD:Client/src/component/Search/SearchBar.js
   
||||||| 78a714d:prof/src/component/Search/SearchBar.js

=======
     console.log(data,"ashish")
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Search/SearchBar.js
    for (let i in data) {
   
      newFilter = data[i].map((inner) => {
<<<<<<< HEAD:Client/src/component/Search/SearchBar.js
     
        domainArray = (inner.domain.split("\n"));
||||||| 78a714d:prof/src/component/Search/SearchBar.js
=======
        console.log(inner.domain.split("\n"));
        domainArray = (inner.domain.split("\n"));
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Search/SearchBar.js
        if (
          inner.college
            .toLowerCase()
            .trim()
            .includes(searchWord.toLowerCase().trim())
        ) {
          setIsValid(true);
          return { ...inner };
<<<<<<< HEAD:Client/src/component/Search/SearchBar.js
        } 
        
        else{
          domainResult = (domainArray.map(element=>{
            if(element.toLowerCase().trim().includes(searchWord.toLowerCase().trim()))
            {
            
              
              
              return {...inner};
            }
          }))
        
          for(i in domainResult)
          {
            if(domainResult[i]!==undefined)
            {
              setIsValid(true);
              return {...inner};
               
            }
          }
          
||||||| 78a714d:prof/src/component/Search/SearchBar.js
        } else {
          setIsValid(false);
=======
        } 
        
        else{
          domainResult = (domainArray.map(element=>{
            if(element.toLowerCase().trim().includes(searchWord.toLowerCase().trim()))
            {
              console.log(inner,"domain Found",element);
              
              
              return {...inner};
            }
          }))
          console.log(domainResult)
          for(i in domainResult)
          {
            if(domainResult[i]!==undefined)
            {
              setIsValid(true);
              return {...inner};
               
            }
          }
          
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Search/SearchBar.js
        }
          /*for(i in domainArray)
          {*/
             
          
        
      });
      
      setPostLoading(false);
<<<<<<< HEAD:Client/src/component/Search/SearchBar.js
||||||| 78a714d:prof/src/component/Search/SearchBar.js

      console.log(newFilter, "/");

      //return value.title.toLowerCase().includes(searchWord.toLowerCase());
=======
      
      console.log(newFilter, "/");
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Search/SearchBar.js
    }
    v = newFilter.map((data) => {
      return { ...data };
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(v);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setPostLoading(true);
    setWordEntered("");
  };
  // console.log(filteredData, "*/*");
  return (
    <React.Fragment>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {wordEntered.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        <section className="searchFeed">
          {postLoading && <span>Welcome To ProReviews</span>}
          {isValid && (
            <Paginator>
              {filteredData.map((result) => {
<<<<<<< HEAD:Client/src/component/Search/SearchBar.js
               
                if(result.name!==undefined)
                {
                  return (
                    <AllProfile
                      image={result.image}
                      name={result.name}
                      college={result.college}
                      breif={result.breif}
                      id={result._id}
                      key={result._id}
                    />
                  );
                }
                
||||||| 78a714d:prof/src/component/Search/SearchBar.js
                // console.log(result,'**')
                return (
                  <AllProfile
                    image={result.image}
                    name={result.name}
                    college={result.college}
                    breif={result.breif}
                    id={result._id}
                    key={result._id}
                  />
                );
=======
                console.log(result.name,'**')
                if(result.name!==undefined)
                {
                  return (
                    <AllProfile
                      image={result.image}
                      name={result.name}
                      college={result.college}
                      breif={result.breif}
                      id={result._id}
                      key={result._id}
                    />
                  );
                }
                
>>>>>>> 5ff42e35541aa7b47d080c7a39a5ec48d9329c6b:prof/src/component/Search/SearchBar.js
              })}
            </Paginator>
          )}
        </section>
      </div>
    </React.Fragment>
  );
}

export default SearchBar;
