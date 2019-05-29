import React from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters}) => {
    console.log('NavBar - rendered');
    return ( 
        <nav className="navbar navbar-light bg-light">
         <span className="navbar-brand" href="#">Navbar{" "}
         <span className="badge badge-pill badge-secondary">
            {totalCounters}
         </span>
         </span>
         </nav>);
    };

// sfc snabbkommandot för det

//Detta behövs inte längre
// class NavBar extends Component {
//     render() { 
// }
 
export default NavBar;