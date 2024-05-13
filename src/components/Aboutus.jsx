import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const EStoreApp = () => {
  return (
    <Container className="py-5">
      {/* Hero Section */}
      <Row className="text-center">
        <Col>
          <h1>Welcome to Our eStore App</h1>
          <p>Discover a world of amazing products!</p>
        </Col>
      </Row>

      {/* Additional Sections */}
      <Row className="mt-5">
        {/* Total Customers Section */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Total Customers</Card.Title>
              <Card.Text>
                10,000+
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Blogs Section */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Blogs</Card.Title>
              <Card.Text>
                Check out our latest articles for tips and insights!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Daily Deals Section */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Daily Deals</Card.Title>
              <Card.Text>
                Don't miss out on today's special offers!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Featured Products Section */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-4">Featured Products</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={require('./home1.jpg')} />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>
                This is a short description of Product 1.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={require('./home1.jpg')} />
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>
                This is a short description of Product 2.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={require('./home1.jpg')} />
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>
                This is a short description of Product 3.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Future Features Section */}
      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-4">Future Features</h2>
          <p className="text-center">
            Stay tuned for exciting updates and new functionalities!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default EStoreApp;
