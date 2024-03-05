import { ChevronRight, GeoAltFill, List, Search } from "react-bootstrap-icons"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <div id="header" className="fixed-top">
            <div className="container">
                <div className="row header-main">
                    <div className="col-3 h-logo d-flex align-items-center">
                    <NavLink to='/' className="d-flex align-items-center">
                            <p className="m-0"><img src="../../../../public/burger.png" alt="burger" /></p>
                            <span>FoodDesk</span>
                    </NavLink>
                          
                    </div>
                    <div className="col-7 d-flex align-items-center">
                        <div className="h-menu"><List/></div>
                        <div className="h-contain-2">
                            <div className="h-option d-flex align-items-center">
                                <select name="country" id="country">
                                    <option value="volvo"><GeoAltFill/>India</option>
                                    <option value="saab">Nepal</option>
                                    <option value="opel">Bangladesh</option>
                                    <option value="audi">Brazil</option>
                                    <option value="audi">China</option>
                                    <option value="audi">Denmark</option>
                                    <option value="audi">Germany</option>
                                    <option value="audi">Japan</option>
                                    <option value="audi">Lithuania</option>
                                </select>
                                <p className="h-line"></p>
                                <div className="h-serach">
                                    <input type="text" placeholder="What do you want eat today (Serach)" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 h-profile d-flex align-items-center justify-content-end">
                        <p className="m-0 d-flex align-items-center">
                            <img src="../../../../public/profile.png" alt="profile" />
                            <span>Joshua</span>
                            <h4 className="m-0"><ChevronRight/></h4>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header