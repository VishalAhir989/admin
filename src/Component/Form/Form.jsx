import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AddDocAdmin } from "../../service/Action/Action";
// import "./Form.css"; // Import your CSS file

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        images: '',
        name: '',
        price: '',
        categories: ''
    });

    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(AddDocAdmin(user));
        setUser({
            images: '',
            name: '',
            price: '',
            categories: ''
        });
        navigate("/ProductView");
    };

    return (
        <div className="form-container">
            <h2 className="form-heading">Add data</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="images" className="form-label">Image:</label>
                    <input type="text" name="images" required id="images" value={user.images} onChange={handleUserChange} className="form-input" placeholder="Product image" />
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" name="name" required id="name" value={user.name} onChange={handleUserChange} className="form-input" placeholder="Product Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input type="number" name="price" id="price" value={user.price} onChange={handleUserChange} className="form-input" placeholder="Product Price" />
                </div>
                <div className="form-group">
                    <label htmlFor="categories" className="form-label">Categories:</label>
                    <input type="text" name="categories" required id="categories" value={user.categories} onChange={handleUserChange} className="form-input" placeholder="Product Categories" />
                </div>
                <button type="submit" className="form-submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Form;
