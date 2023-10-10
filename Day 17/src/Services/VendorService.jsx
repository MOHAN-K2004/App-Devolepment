import { vendorApi } from "../api/axios";

class VendorService{
    AddVendor =(vendor)=>vendorApi.post('/postvendor',vendor);
    GetVendor=()=>vendorApi.get('/getAll');
    DeleteVendor=(vendorid)=>vendorApi.delete('/deletevendor',{params:{vendorid}})
    GetVendorById=(vendorid)=>vendorApi.get('/getVendor',{params:{vendorid}})
    UpdateVendor=(vendorid,vendor)=>vendorApi.put('/putvendor?vendorid='+vendorid,vendor);
}
export default new VendorService;