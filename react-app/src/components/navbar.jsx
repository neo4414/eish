import { Link } from "react-router-dom";
import './nav.css';



function navbar (){
    return(
        <div className="App">
        <nav>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/about">About</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
            </ul>
        </nav>
        </div>

    )
}
export default navbar;