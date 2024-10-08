import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating.jsx';
import products from '../products';

const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find((p) => p._id === productId);
    console.log(product);

  return (
    <>
        <Link className='btn btn-light my-3' to="/">Retour</Link>
        <Row>
            <Col md={5}>
                <Card className="p-1">
                    <Image src={product.image} alt={product.name} fluid />
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price} €
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Description: </h5>
                            {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ? 'Encore Disponible' : 'Plus Disponible'}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type="button" disable={product.countInStock === 0}>
                                Ajouter au panier
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>

            </Col>
        </Row>
    </>
  )
}

export default ProductScreen