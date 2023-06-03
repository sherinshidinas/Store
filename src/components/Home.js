import { React, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Productcards from "./Productcards";
import { useDispatch,useSelector } from "react-redux";
import { productListReducer } from "../reducers/productReducers";
import { listProducts } from "../actions/productAction";

function Home() {
  const [prod, setProd] = useState([]);
  
 const dispatch=useDispatch()
 const productData=useSelector(state=>state.pReducer)

 const {product}=productData

  // const fetchData = async () => {
  //   await fetch("/Products.json").then((res) =>
  //     res.json().then((res) => setProd(res))
  //   );
  // };

  useEffect(() => {
    // fetchData();
    dispatch(listProducts())
  }, []);

  return (
    <>
      <Row sm={3} md={4} lg={6} xl={8}>
        {product.map((item) => {
          return (
            <Productcards item={item}/>
          );
        })}
      </Row>
    </>
  );
}

export default Home;
