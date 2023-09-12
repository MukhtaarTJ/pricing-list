import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./Product";

function App() {
  return (
    <div
      className="app"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "centerg",
      }}>
      <Card
        style={{
          width: "18rem",
        }}>
        <Card.Img src={product.image} alt={product.name} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
