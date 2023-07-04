let add = (req, res)=>{
    try{
    const {num1, num2} = req.body;
    if(num1 == undefined || num2 == undefined){
        return res.status(400).json({
            "message": "num1 and num2 required"
        })
    }
    

    let sum = num1 +num2;
    return res.status(200).json({
        "message":"success",
        "data": sum
    })
    }catch(err){
        console.log("ERROR: ", err);
        return res.status(500).json({
            "message":"Internal Server Error"
        })
    }
}

module.exports = {add}