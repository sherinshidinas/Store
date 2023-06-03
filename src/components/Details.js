import Reac,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import {Row,Col,Image} from 'react-bootstrap'

function Details() {

const params=useParams()
const [prod,setProd]=useState([])

const fetchData=async ()=>{
  await fetch("/products.json").then(res=>res.json()).then(data=>setProd(data))
}

useEffect(()=>{
  fetchData()
},[])

const details=prod.find((item)=>item.id==params.id)
console.log(details)

  return (
   <>
   {details?
    <Row>

      <Col>
          <Image className='img' style={{width:"100%",height:"500px"}} src={details.image}></Image>
      </Col>

      <Col>
        <h1>{details.title}</h1>
        <p>{details.category}</p>
        <p>{details.description}</p>
      </Col>

      <Col>
          <h3>{details.price}</h3>
          <p>{details.rating.rate}({details.rating.count})</p>
      </Col>



    </Row>
  :<h1>Cannot get product</h1>}

   </>
  )
}

export default Details