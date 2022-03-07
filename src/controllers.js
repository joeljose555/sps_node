let index   =   async(req,res)=>{
    return res.render('index')
}

let aboutUS = async(req,res)=>{
    return res.render('aboutus')
}

let products = async(req,res)=>{
    return res.render('products')
}

let services = async (req,res)=>{
    return res.render("services")
}
let contactUs = async(req,res)=>{
    return res.render('contactUs')
}
export default {index,aboutUS,products,services,contactUs}