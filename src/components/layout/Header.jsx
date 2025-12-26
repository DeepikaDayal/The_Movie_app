 import { NavLink } from "react-router-dom"

export const Header = () =>{
    const getNevLinkStyle = ({isActive}) => {
        return{
        color : isActive ? "blue" : "red",
        }
    }
return(
        <header className="section-navbar">
        <section className="top-txt">
              <div className="head container">
                <div className="head_txt">
                    <p>Movies! Details Here</p>
                </div>
                <div className="sign_in_up">
                    <NavLink to="#">SIGN IN</NavLink>
                    <NavLink to="#">SIGN UP</NavLink>
                </div>
            </div>
        </section>

        <div className="container">
            <div className="navbar-brand">
                < NavLink to="index.html">
                    <img src= "./image/movie-guide-logo.png"alt="logo"  class="logo" width="80" height="auto" />
                     
                </NavLink>
            </div>
            <nav className="navbar">
            <ul>
                <li className="nav-item">
                    <NavLink to="/" style={({isActive}) =>{
                        return{
                            color: isActive ? "blue" : "red",
                        }
                    }}
                    >
                    Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="about" style={({isActive})=>{
                        return{
                            color : isActive ? "blue" : "red",
                        }

                    }}>
                        About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="contact"style={({isActive}) =>{
                        return{
                            color : isActive ? "blue" : "red" ,
                        }
                    }
                }>
                        Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="movie" className="nav-link" 
                    style={getNevLinkStyle }
                    >Movie</NavLink>
                    
                </li>
            </ul>
            </nav>
        </div>
    </header> 
    ) 
    
}