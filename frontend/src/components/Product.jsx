import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-1 rounded card-fixed-size">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" alt={product.name} className="card-image-fixed" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
        <Rating value={product.rating} text={`${product.numReviews} notes`}></Rating>
        </Card.Text>

        <Card.Text as="h3">
          {product.price} €
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
