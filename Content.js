import React from 'react';
import './Content.css';
import Search from './Search';


function Content() {
    const goBackUp = () => {
        window.scrollTo(0, 0);
    }

    return (
        <><Search />
            <div className="container-fluid bg-light">
                <div className="cohtaiher-fluid">
                    <ul id="job-list">
                        <li>
                            <a href="https://google.com"><h4 className="job-title">Scheduling coordinator</h4></a>
                            <p className="location"><i className="bi bi-geo-alt-fill icon">Deerfield, IL</i><span className="learn"><a href="https://google.com">Learn More</a></span></p>
                        <hr/>    
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/"><h4 className="job-title">Human Resources Generalist I</h4></a>
                            <p className="location"><i className="bi bi-geo-alt-fill">Deerfield, IL</i><span className="learn"><a href="https://developer.mozilla.org/en-US/">Learn More</a></span></p>

                        <hr/>
                        </li>
                        <li>
                            <a href="https://apple.com"><h4 className="job-title">Behavior Technician</h4></a>
                            <p className="location"><i className="bi bi-geo-alt-fill icon">Madison, WI</i><span className="learn"><a href="https://apple.com">Learn More</a></span></p>
                        <hr/>    
                        </li>
                        <li>
                            <a href="https://netflix.com"><h4 className="job-title">Billing Specialist</h4></a>
                            <p className="location"><i className="bi bi-geo-alt-fill icon">Deerfield, IL</i><span className="learn"><a href="https://netflix.com">Learn More</a></span></p>
                        <hr/>    
                        </li>
                        <li>
                            <a href="https://bandcamp.com"><h4 className="job-title">Psychology Post-Doctoral Fellow</h4></a>
                            <p className="location"><i className="bi bi-geo-alt-fill icon">Madison, WI</i><span className="learn"><a href="https://bandcamp.com">Learn More</a></span></p>
                        <hr/>    
                        </li>
                    </ul>
                </div>
            </div>
            <footer className="footer">
                Designed by <a href="http://dmdlich.com">Leo In Chul Hwang</a> | Terms of Use 
                <div className="footer-link-2" onClick={goBackUp}>
                    To the top<i className="bi bi-arrow-up"></i>
                </div>
            </footer>
        </>
    );
};


export default Content