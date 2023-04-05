import React, { useEffect, useState } from 'react'
import { Delete, Read } from '../../ApiSevices/CRUDservice'
import { ErrorTost, SuccessTost } from '../../Helpers/Validation';
import FullScrenLoder from '../Common/FullScrenLoder';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const ReadForm = (props) => {

  const navigate = useNavigate();
  const [ReadData ,SetReadData] = useState([]);


  useEffect(()=>{
    Read().then((Result)=>{
      SetReadData(Result)
    })
  },[]);

  const UpdateProduct =(id)=>{
      navigate("/update/"+id);
    }

  const DeleteProduct =(id)=>{
      Delete(id).then((Result)=>{
        if(Result === true){
          SuccessTost('Delete success')
          navigate("/");
        }
      }).catch((error)=>{
        ErrorTost("Delete fail")
      })
  }

  if(ReadData.length>0){
    return (
      <div className='container text-center py-5'>
        <table className='table'>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Code</th>
            <th>Image</th>
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Total Price</th>
            <th>Create Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            ReadData.map((item,index)=>{
              return (
                <tr key={index}>
                <th>{item.ProductName}</th>
                <th>{item.ProductCode}</th>
                <th> <img className='ReadImage' src={item.Image} /> </th>
                <th>{item.UnitPrice}</th>
                <th>{item.Qty}</th>
                <th>{item.TotalPrice}</th>
                <th>{item.CreateDate}</th>
                <th><button onClick={UpdateProduct.bind(this,item._id)} className='btn btn-info btn-sm'>Update</button></th>
                <th><button onClick={DeleteProduct.bind(this,item._id)} className='btn btn-info btn-sm'>Delete</button></th>
                <ToastContainer position="top-center"/>
              </tr>
              )
            })
              
          }
        </tbody>
      </table>
      </div>
    )
  }
  else{
    <div>
      <FullScrenLoder/>
    </div>
  }

}

export default ReadForm ;

