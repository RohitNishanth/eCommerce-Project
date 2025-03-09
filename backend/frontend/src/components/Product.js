import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    // Format the price with commas and currency symbol
    const formattedPrice = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(product.price);

    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`} className="text-decoration-none">
                    <Card.Title as="div" className="d-flex justify-content-center align-items-center">
                        <strong style={{ fontSize: '1.1rem', fontWeight: '600', textAlign: 'center' }}>
                            {product.name}
                        </strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>

                <Card.Text as="h3" className="text-center">
                    {formattedPrice}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
