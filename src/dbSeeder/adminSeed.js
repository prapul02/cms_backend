require("../dbConfig/db")
const admin = require("../models/admin")

const adminData = {
    email:"admin@email.com",
    password:"admin123"
}

const saveAdmin = async() => {
    try{
        const result = await new admin(adminData).save()
        //const result = await newAdmin.save()
        console.log(result)
    }
    catch(e){
        console.log(e)
    }
}

saveAdmin();