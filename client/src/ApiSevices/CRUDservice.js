import axios from 'axios' ;

export function Create(ProductName, ProductCode ,Image ,UnitPrice ,Qty ,TotalPrice, CreateDate){
    let URL = "http://localhost:5000/api/v1/CreateProduct"
    let PostBody ={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Image :Image,
        UnitPrice :UnitPrice,
        Qty:Qty,
        TotalPrice:TotalPrice, 
        CreateDate:CreateDate,
    }
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status === 200){
            return true
        }
    }).catch((error)=>{
        return false
    })
}

export function Read(){
    let URL = 'http://localhost:5000/api/v1/ReadProduct'
    return axios.post(URL).then((res)=>{
        if(res.status === 200){
            
            return res.data['data']
        }
        
    }).catch((error)=>{
        return false
    })

}

export function ReadById(id){
    // let URL = "http://localhost:5000/api/v1/ReadById/"+id ;
    return axios.post("http://localhost:5000/api/v1/ReadById/"+id).then((res)=>{
        if(res.status === 200){
            return res.data['data']
        }
    }).catch((error)=>{
        return false
    })
}

export function Update(id,ProductName,ProductCode,Image,UnitPrice,Qty,TotalPrice,CreateDate){
    let URL = 'http://localhost:5000/api/v1/UpdateProduct/'+id ;
    let PostBody ={
        ProductName :ProductName,
        ProductCode :ProductCode,
        Image :Image,
        UnitPrice :UnitPrice,
        Qty :Qty,
        TotalPrice :TotalPrice,
        CreateDate :CreateDate,

    }
    return axios.post(URL,PostBody).then((res)=>{
        // alert(JSON.stringify(res))
        if(res.status === 200){
            return true
        }else{
            return false
        }
    }).catch((error)=>{
        return false
    })
}

export function Delete(id){
    let URL = "http://localhost:5000/api/v1/DeleteProduct/"+id;
    return axios.post(URL).then((res)=>{
        if(res.status === 200){
            return true
        }
    }).catch((error)=>{
        return false
    })

}

