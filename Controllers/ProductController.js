const ProductModel = require('../Models/ProductModel')

// CREATE PRODUCT
exports.CreateProduct=(req,res)=>{
    let reqBody =req.body;
    ProductModel.create(reqBody,(error,data)=>{
        if(error){
            res.status(400).json({status:"Product Create Fail",Data:error});
        }
        else{
            res.status(200).json({status:"Product Create Success ",Data:data});
        };
    });
};

// READ PRODUCT
exports.ReadProduct=(req,res)=>{
    let Qurey = {};
    let Projection = "ProductName ProductCode Image UnitPrice Qty TotalPrice CreateDate ";

    ProductModel.find(Qurey,Projection ,(error,data)=>{
        if(error){
            res.status(400).json({status:" Product Read Fail",data:error});
        }
        else{
            res.status(200).json({status:"Product Read Success ",data:data});
        };
    });
}

// READ by id PRODUCT
exports.ReadById=(req,res)=>{
    let Id = req.params.id
    let Qurey = {_id : Id}
    let Projection = "ProductName ProductCode Image UnitPrice Qty TotalPrice CreateDate ";

    ProductModel.findOne(Qurey,Projection ,(error,data)=>{
        if(error){
            res.status(400).json({status:" Product Read Fail",data:error});
        }
        else{
            res.status(200).json({status:"Product Read Success ",data:data});
        };
    });
}

// UPDATE PRODUCT
exports.UpdateProduct=(req,res)=>{
    let Id = req.params.id
    let Qurey = {_id : Id}
    let reqBody = req.body
    ProductModel.updateOne(Qurey ,reqBody ,(error,data)=>{
        if(error){
            res.status(400).json({status:" Product Update Fail",data:error});
        }
        else{
            res.status(200).json({status:"Product Update Success ",data:data});
        };
    });
};

// DELETE DATA
exports.DeleteProduct=(req,res)=>{
    let Id = req.params.id ;
    let Query = {_id :Id}

    ProductModel.deleteOne(Query ,(error,data)=>{
        if(error){
            res.status(400).json({status:"Product Delete Fail",data:error});
        }
        else{
            res.status(200).json({status:"Product Delete Success ", data:data});
        };
    });
};









