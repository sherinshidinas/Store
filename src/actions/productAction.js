import {PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS} from '../constants/productConstants'
import axios from 'axios'

export const listProducts=()=>async (dispatch)=>{
    const {data}= await axios.get('/Products.json') 

    try{
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
    }

    catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,error:error})
    }
}