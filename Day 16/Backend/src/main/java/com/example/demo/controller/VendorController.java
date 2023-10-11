package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.constant.Api;
import com.example.demo.model.VendorModel;
import com.example.demo.service.VendorService;

@RestController
@RequestMapping(Api.AUTH)
public class VendorController {

	  @Autowired
	    private VendorService vendorservice;

	    @GetMapping("/getAll")
	    public ResponseEntity<?> getAllVendors() {
	        ArrayList<VendorModel> vendors = vendorservice.getAllVendors();
	        return ResponseEntity.ok().body(vendors);
	    }
	    @GetMapping("/getVendor")
	    public ResponseEntity<?> getVendorById(@RequestParam String vendorid) {
	    	VendorModel vendor = vendorservice.getVendorById(vendorid);
	    	return ResponseEntity.ok().body(vendor);
	    }

	    @PostMapping("/postvendor")
	    public ResponseEntity<?> addvendors(@RequestBody VendorModel vendorModel) {
	        String res = vendorservice.addVendors(vendorModel);
	        return ResponseEntity.ok().body(res);
	    }

	    @PutMapping("/putvendor")
	    public ResponseEntity<?> putVendor(@RequestParam String vendorid, @RequestBody VendorModel vendorModel) {
	        Boolean flag = vendorservice.putVendor(vendorid, vendorModel);
	        if (flag)
	            return ((BodyBuilder) ResponseEntity.ok()).body("Updated Successfully");
	        return ((BodyBuilder) ResponseEntity.notFound()).body("Vendor Id Not Found");
	    }
	    
	    @DeleteMapping("/deletevendor")
	    public ResponseEntity<?> deleteVendor(@RequestParam String vendorid) {
	        Boolean flag = vendorservice.deleteService(vendorid);
	        if (flag)
	            return ((BodyBuilder) ResponseEntity.ok()).body("Deleted Successfully");
	        return ((BodyBuilder) ResponseEntity.notFound()).body("Venodor Id Not Found");
	    }
}
