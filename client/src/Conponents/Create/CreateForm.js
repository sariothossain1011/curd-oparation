import React, { useRef } from 'react'
import { ToastContainer } from 'react-toastify';
import { Create } from '../../ApiSevices/CRUDservice';
import { useNavigate } from "react-router-dom";


import {IsEmty ,SuccessTost,ErrorTost} from '../../Helpers/Validation';
import FullScrenLoder from '../Common/FullScrenLoder';


const CreateForm = () => {
    const navigate = useNavigate()
    let {ProductName, ProductCode ,Image ,UnitPrice ,Qty ,TotalPrice, CreateDate ,Loder} = useRef();

    const SaveData =(e)=>{
        e.preventDefault()
        let Name = ProductName.value;
        let Code = ProductCode.value;
        let Img = Image.value;
        let Price = UnitPrice.value ;
        let Quantity = Qty.value;
        let Total = TotalPrice.value; 
        let Date = CreateDate.value;

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
        else if(IsEmty(Quantity)){
            ErrorTost('Product quantity required')
        }
        else if(IsEmty(Total)){
            ErrorTost('Product total required')
        }
        else{
            Loder.classList.remove('d-none')
            Create(Name,Code,Img,Price,Quantity,Total,Date).then((Result)=>{
                Loder.classList.add('d-none')
                if(Result === true){
                    SuccessTost('Product save success');
                    navigate('/')
                    ProductName.value= "";
                    ProductCode.value="";
                    Image.value="";
                    UnitPrice.value="";
                    Qty.value="";
                    TotalPrice.value="";
                    CreateDate.value="";

                }

            }).catch((error)=>{
                ErrorTost('Product save fail');
                
            })
        }
        
    }

  return (
    <div className='container p-5 '>
        <div className="row">
            <h2 className='text-center p-3'>Create Product</h2>
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
                <label htmlFor="">Quantity : </label>
                <input type="text" ref={(input)=>Qty=input}  placeholder='Enter your product quantitity ' className=' form-control' />
            </div>
            <div className="col-md-4 ">
                <label htmlFor="">Total Price : </label>
                <input type="numbar" ref={(input)=>TotalPrice=input}  placeholder='Enter your product total price ' className=' form-control' />
            </div>
            
           <div className="col-md-4 ">
                <label htmlFor="">Create Date : </label>
                <input type="Date" ref={(input)=>CreateDate=input}  placeholder='Enter your product create date ' className=' form-control' />
            </div>
            <br/>
            <div className='p-2 m-auto '>
            <button className="btn btn-success px-5 " onClick={SaveData}>Submit </button>
            <ToastContainer position="top-center" />
            </div>
        </div>
        <div className='d-none' ref={(div)=>Loder=div} >
            <FullScrenLoder/>
        </div>
    </div>
  )
}

export default CreateForm