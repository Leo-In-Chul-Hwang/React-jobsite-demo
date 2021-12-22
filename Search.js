import React from 'react';
import './Search.css'
import './Content.js'


function Search() {
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        const jobTitle = document.getElementById('job-list');
        const iValue = document.getElementById('keyword').value;
        const elements = Array.from(jobTitle.children);
        
        const newArr = elements.map(item => {
            const list = item.innerText.toLowerCase().includes(iValue)
            
            if(e.keyCode === 8) {
                item.style.display = "block";
            } else if (!list) {
                item.style.display = "none";
            } else {
                return "There is no match for your query at this time. Try another query."
            }
        })
    }
    
    const onKeyUp = (e) => {
        onSubmit(e);
    }
    
    return (
        <>
            <div className="container">
                <form>
                    <div id="job">
                        <h1>Current Job Openings</h1>
                    </div>
                    <div className="container-fluid">
                        <input 
                            type="text" 
                            placeholder="Enter Job Title or Location" 
                            className="col-10" 
                            id="keyword" 
                            onKeyUp={onKeyUp}
                        >
                        </input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Search
