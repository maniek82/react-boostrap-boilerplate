var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = (props) => {
     
        return (
             <nav className="navbar navbar-dark bg-primary">
              <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">
                &#9776;
              </button>
              <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
                <a className="navbar-brand" href="#">Weather App</a>
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                  
                    <IndexLink className="nav-link" activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/">Get Weather</IndexLink>
                  </li>
                  <li className="nav-item">  
                     <Link className="nav-link" activeClassName="active"activeStyle={{fontWeight:'bold'}} to="/examples">Examples</Link>
                  </li>
                  <li className="nav-item"> 
                   <Link className="nav-link"  activeClassName="active" activeStyle={{fontWeight:'bold'}}to="/about">About</Link>
                  </li>
                   
                </ul>   
              </div>
        </nav>
            
            );
            
        
    };
module.exports =Nav;