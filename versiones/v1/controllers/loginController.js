const loginToken =  (req,res)=>{
    res.status(req.data.status).send(req.data);
};
export {loginToken};