import React, { useRef ,useEffect, Fragment} from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { ReadById, Update } from '../../ApiSevices/CRUDservice';
import {IsEmty ,SuccessTost,ErrorTost} from '../../Helpers/Validation';
import FullScrenLoder from '../Common/FullScrenLoder';

const UpdateForm = (props) =>{
    let navigate = useNavigate()
  
  let ProductName, ProductCode ,Image ,UnitPrice ,QtyRef ,TotalPrice,Create_Date ,Loder = useRef();
  const UpdateData =(e)=>{
    e.preventDefault()
    let Name = ProductName.value;
    let Code = ProductCode.value;
    let Img = Image.value;
    let Price = UnitPrice.value ;
    let Qty = QtyRef.value;
    let Total = TotalPrice.value; 
    let CreateDate = Create_Date.value; 


    if(IsEmty(Name)){
        ErrorTost('Product name required')
    }
    else if(IsEmty(Code)){
        ErrorTost('Product code required')
    }
    else if(IsEmty(Img)){
        ErrorTost('Product image required')
    }
    else if(IsEmty(Price)){
        ErrorTost('Product price required')
    }
    else if(IsEmty(Qty)){
        ErrorTost('Product quantity required')
    }
    else if(IsEmty(Total)){
        ErrorTost('Product total required')
    }
    else{
        Loder.classList.remove('d-none')
        Update(props.id ,Name,Code,Img,Price,Qty,Total,CreateDate).then((Result)=>{
            // alert(Result)
            Loder.classList.add('d-none')
            if(Result === true){
                SuccessTost('Product update success');
                navigate("/")
            }
        }).catch((error)=>{
            ErrorTost('Product update fail');
            
        })
    }
  }

  useEffect(()=>{
    ReadById(props.id).then((Result)=>{
        ProductName.value=Result['ProductName']
            ProductCode.value=Result['ProductCode']
            Image.value=Result['Image']
            UnitPrice.value=Result['UnitPrice']
            QtyRef.value=Result['Qty']
            TotalPrice.value=Result['TotalPrice']
            Create_Date.value=Result['CreateDate']

    })
},[])

  return (
    <Fragment>
      <div className='container p-5 '>
        <div className="row">
            <h2 className='text-center p-3'>Updata Product</h2>
            <div className="col-md-4 ">
                <label htmlFor="">Product Name : </label>
                <input ref={(input)=>ProductName=input} type="text" placeholder='Enter your product name ' className='form-control' />
            </div>
           <div className="col-md-4 ">
                <label htmlFor="">Product Code : </label>
                <input type="number" ref={(input)=>ProductCode=input}  placeholder='Enter your product code ' className=' form-control' />
            </div>
           <div className="col-md-4 ">
                <label htmlFor="">Image : </label>
                <input type="text" ref={(input)=>Image=input}  placeholder='Enter your product image ' className=' form-control ' />
            </div>
           <div className="col-md-4 ">
                <label htmlFor="">Unit Price : </label>
                <input type="numbar" ref={(input)=>UnitPrice=input}  placeholder='Enter your product price ' className=' form-control' />
            </div>
           <div className="col-md-4 ">
                <label htmlFor="">Quamtity : </label>
                <input type="text" ref={(input)=>QtyRef=input}  placeholder='Enter your product quantitity ' className=' form-control' />
            </div>
            <div className="col-md-4 ">
                <label htmlFor="">Total Price : </label>
                <input type="numbar" ref={(input)=>TotalPrice=input}  placeholder='Enter your product total price ' className=' form-control' />
            </div>
            
           <div className="col-md-4 ">
                <label htmlFor="">Create Date : </label>
                <input type="Date" ref={(input)=>Create_Date=input}  placeholder='Enter your product create date ' className=' form-control' />
            </div>
            <br/>
            <div className='pt-4 m-auto '>
            <button className="btn btn-success px-5 " onClick={UpdateData}>Update </button>
            <ToastContainer position="top-center" />
            </div>
        </div>
        <div className='d-none' ref={(div)=>Loder=div} >
            <FullScrenLoder/>
        </div>
    </div>
    </Fragment>
  )
}

export default UpdateForm