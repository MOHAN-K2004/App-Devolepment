import axios from "axios";

const authApi =axios.create({
    baseURL:"http://localhost:2424/api/v1/auth"
    
})
const vendorApi =axios.create({
    baseURL:"http://localhost:2424/api/v1/auth"

})
export {authApi,vendorApi}