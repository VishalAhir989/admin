import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";
import { Button} from "react-bootstrap";
import { dataDelete, dataGet } from "../../service/Action/Action";
import { useNavigate } from "react-router";

const ProductView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { products } = useSelector (state => state.signReducer);
  console.log('Products:', products);

  const productList = Array.isArray(products) ? products : [];

  const handleDelete = (id) => {
    dispatch(dataDelete(id))
  }


  useEffect(() => {
    dispatch(dataGet());
  }, [])

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Images</th>
          <th>Product Name</th>
          <th>Product Price</th>
          {/* <th>Product color</th> */}
          <th>Product Categories</th>
          <th>Update</th> 
          <th>Delet</th>
        </tr>
      </thead>
      <tbody>
      {productList.length > 0 ? (
  productList.map((product, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{product.images}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      {/* <td>{product.color}</td> */}
      <td>{product.categories}</td>
      <td>
        <Button variant="info">
          Edit
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={() => handleDelete(product.id)}>
          Delete
        </Button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="6">No products available</td>
  </tr>
)}

      </tbody>
    </Table>
  );
};

export default ProductView;
