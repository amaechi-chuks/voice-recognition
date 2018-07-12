import React from 'react';

const QuickLinks = ()=>{



	return (
		<div>
			<div className="collapse navbar-collapse" id="navbarToggler">
             <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="Follow me on Twitter" data-placement="bottom" href="https://twitter.com/chuks022"  >
                         <i className="fa fa-twitter"></i>
                         <p className="d-lg-none">Twitter</p>
                     </a>
                     </li>
             
                 <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="Connect on Linkedin" data-placement="bottom" href="https://www.linkedin.com/in/chuks-amaechi-1870a2156/"  >
                         <i className="fa fa-linkedin"></i>
                         <p className="d-lg-none">Twitter</p>
                     </a>
                     </li>

                     <li class="nav-item" >
                        <a class="nav-link" rel="tooltip" title="Follow me on Medium" data-placement="bottom" href="https://medium.com/@amaechichuks2000" target="_blank">
                            <i class="fa fa-medium-square" >
                            <svg data-icon="medium" viewBox="0 0 32 32"  >
                                <path d="M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M5 11.5 A12 12 0 0 1 11 5 A46 46 0 0 1 13.5 9.25 A46 46 0 0 1 5 11.5 M15 4 A12 12 0 0 1 21.5 5.25 A46 46 0 0 1 17 7.75 A50 50 0 0 0 15 4 M4 16 A50 50 0 0 0 15 13 A46 46 0 0 1 16 15.5 A26 26 0 0 0 6 22.5 A12 12 0 0 1 4 16 M18.5 11.5 A50 50 0 0 0 25 8 A12 12 0 0 1 28 13.75 A26 26 0 0 0 19.75 14.5 A50 50 0 0 0 18.5 11.5 M17 19.5 A46 46 0 0 1 18 28 A12 12 0 0 1 8.75 25.5 A22 22 0 0 1 17 19.5 M20.75 18.25 A22 22 0 0 1 28 17.75 A12 12 0 0 1 22 26.5 A50 50 0 0 0 20.75 18.25"></path>
                              </svg></i>
                              <p class="d-lg-none">Medium</p>
                        </a>
                    </li>

                 <li className="nav-item">
                     <a className="nav-link" rel="tooltip" title="Star on GitHub" data-placement="bottom" href="https://github.com/amaechi-chuks"  >
                         <i className="fa fa-github"></i>
                         <p className="d-lg-none">GitHub</p>
                     </a>
                 </li>
             </ul>
    
        </div>
		</div>
	);

}



export default QuickLinks;		
