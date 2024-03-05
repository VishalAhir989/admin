import { Bicycle, ChevronDown, FileBreak, FileEarmarkCheck, FileEarmarkSpreadsheet, GearWide, Grid, Heart, HouseGearFill, InfoCircle, PieChart, Star } from 'react-bootstrap-icons';
import Accordion from 'react-bootstrap/Accordion';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return(
        <div id="sidebar">
            <div className="col-12 sidebar-main ">
                <div className="col-12 menu-title">
                    <p className='m-0'>Main Menu</p>
                </div>
                <div className="col-12">
                    <Accordion defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <p className='m-0'><Grid/></p> 
                                Dashboard
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='sidebar-list m-0'>
                                    <li className='py-2'><NavLink to='Form/' className="text-decoration-none">- Form</NavLink></li>
                                    <li className='py-2'><NavLink to='/ProductView' className="text-decoration-none">- View</NavLink></li>
                                    <li className='py-2'><a href="#">- Dashboard Light</a></li>
                                    <li className='py-2'><a href="#">- Dashboard Dark</a></li>
                                    <li className='py-2'><a href="#">- Food Order</a></li>
                                    <li className='py-2'><a href="#">- Favorite Menu</a></li>
                                    <li className='py-2'><a href="#">- Message</a></li>
                                    <li className='py-2'><a href="#">- Order History</a></li>
                                    <li className='py-2'><a href="#">- Notification</a></li>
                                    <li className='py-2'><a href="#">- Bill</a></li>
                                    <li className='py-2'><a href="#">- Setting</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header >
                                <p className='m-0'><HouseGearFill/></p> 
                                Dashboard
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='sidebar-list m-0'>
                                    <li className='py-2'><a href="#">- Restaurant</a></li>
                                    <li className='py-2'><a href="#">- Menu</a></li>
                                    <li className='py-2'><a href="#">- Orders</a></li>
                                    <li className='py-2'><a href="#">- Reviews</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header >
                                <p className='m-0'><Bicycle/></p> 
                                Dashboard
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='sidebar-list m-0'>
                                    <li className='py-2'><a href="#">- Dashboard</a></li>
                                    <li className='py-2'><a href="#">- Orders</a></li>
                                    <li className='py-2'><a href="#">- Feedback</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                </div>
                <div className="col-12 menu-title">
                    <p className='m-0'>Other</p>
                </div>
                <div className="col-12">
                    <Accordion defaultActiveKey="">
                        <Accordion.Item eventKey="4">
                            <Accordion.Header >
                                <p className='m-0'><InfoCircle/></p> 
                                App
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='sidebar-list m-0'>
                                    <li className='py-2'><a href="#">- Profile</a></li>
                                    <li className='py-2'><a href="#">- Post Details</a></li>
                                    <li className='py-2'><a href="#">- Email</a></li>
                                    <li className='py-2'><a href="#">- Calendar</a></li>
                                    <li className='py-2'><a href="#">- Shope</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header >
                                <p className='m-0'><PieChart/></p> 
                                Charts
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='sidebar-list m-0'>
                                    <li className='py-2'><NavLink to='RechartJs/' className="text-decoration-none">- RechartJs</NavLink></li>
                                    <li className='py-2'><a href="#">- Chartjs</a></li>
                                    <li className='py-2'><a href="#">- Sparkline</a></li>
                                    <li className='py-2'><a href="#">- Apexchart</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header >
                                <p className='m-0'><Star/></p> 
                                Bootstrap
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='sidebar-list m-0'>
                                    <li className='py-2'><a href="#">- Accordion</a></li>
                                    <li className='py-2'><a href="#">- Alert</a></li>
                                    <li className='py-2'><a href="#">- Badge</a></li>
                                    <li className='py-2'><a href="#">- Button</a></li>
                                    <li className='py-2'><a href="#">- Modal</a></li>
                                    <li className='py-2'><a href="#">- Button Group</a></li>
                                    <li className='py-2'><a href="#">- List Group</a></li>
                                    <li className='py-2'><a href="#">- Cerds</a></li>
                                    <li className='py-2'><a href="#">- Carousel</a></li>
                                    <li className='py-2'><a href="#">- Dropdown</a></li>
                                    <li className='py-2'><a href="#">- Popover</a></li>
                                    <li className='py-2'><a href="#">- Progressbar</a></li>
                                    <li className='py-2'><a href="#">- Tab</a></li>
                                    <li className='py-2'><a href="#">- Typogrophy</a></li>
                                    <li className='py-2'><a href="#">- Pagination</a></li>
                                    <li className='py-2'><a href="#">- Grid</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header >
                                <p className='m-0'><Heart/></p> 
                                Plugins
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='sidebar-list m-0'>
                                    <li className='py-2'><a href="#">- Select 2</a></li>
                                    <li className='py-2'><a href="#">- Sweet Alert</a></li>
                                    <li className='py-2'><a href="#">- Toastr</a></li>
                                    <li className='py-2'><a href="#">- Jqv Map</a></li>
                                    <li className='py-2'><a href="#">- Light Gallery</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header >
                                <p className='m-0'><FileEarmarkCheck/></p> 
                                Forms
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='sidebar-list m-0'>
                                    <li className='py-2'><a href="#">- Form Elements</a></li>
                                    <li className='py-2'><a href="#">- Wizard</a></li>
                                    <li className='py-2'><a href="#">- CkEditor</a></li>
                                    <li className='py-2'><a href="#">- Pickers</a></li>
                                    <li className='py-2'><a href="#">- Form Validate</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10">
                            <Accordion.Header >
                                <p className='m-0'><FileEarmarkSpreadsheet/></p> 
                                Forms
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className='sidebar-list m-0'>
                                    <li className='py-2'><a href="#">- Table Filtering</a></li>
                                    <li className='py-2'><a href="#">- Table Sorting</a></li>
                                    <li className='py-2'><a href="#">- Bootstrap</a></li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-12">
                    <h2>helooo</h2>
                </div>
            </div>
        </div>
    )
}
export default Sidebar