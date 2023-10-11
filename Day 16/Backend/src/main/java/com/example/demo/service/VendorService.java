package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.VendorModel;
import com.example.demo.repository.VendorRepository;

@Service
public class VendorService {

	 @Autowired
	    private VendorRepository vendorrepository;

	    public ArrayList<VendorModel> getAllVendors() {
	        ArrayList<VendorModel> vendors = (ArrayList<VendorModel>) vendorrepository.findAll();
	        return vendors;
	    }

	    public String addVendors(VendorModel vendorModel) {
	    	vendorModel.setVendorid(UUID.randomUUID().toString());
	    	vendorModel.setCreatedAt(LocalDateTime.now());
	    	vendorModel.setUpdatedAt(LocalDateTime.now());

	        vendorrepository.save(vendorModel);
	        return "Vendor Added Successfully";
	    }

	    public Boolean putVendor(String vendorid, VendorModel vendorModel) {
	        Boolean isExists = vendorrepository.findById(vendorid).isPresent();
	        if (!isExists)
	            return false;
	        VendorModel storedvendormodel = vendorrepository.findById(vendorid).get();
	        VendorModel newvendorModel = updateVendorModel(storedvendormodel, vendorModel);
	        vendorrepository.save(newvendorModel);
	        return true;
	    }
	    
	    public Boolean deleteService(String vendorid) {
	        Boolean isExists = vendorrepository.findById(vendorid).isPresent();
	        if (!isExists)
	            return false;
	        vendorrepository.deleteById(vendorid);
	        return true;
	    }

	    public VendorModel updateVendorModel(VendorModel storedVendorModel, VendorModel vendorModel) {
	        VendorModel newvendorModel = new VendorModel();
	        newvendorModel.setVendorid(storedVendorModel.getVendorid());
	        newvendorModel.setCreatedBy(storedVendorModel.getCreatedBy());
	        newvendorModel.setCreatedAt(storedVendorModel.getCreatedAt());
	        newvendorModel.setUpdatedAt(LocalDateTime.now());
	        newvendorModel.setVendorid(vendorModel.getVendorid());
	        newvendorModel.setName(vendorModel.getName());
	        newvendorModel.setVs(vendorModel.getVs());
	        newvendorModel.setVsmm(vendorModel.getVsmm());
	        newvendorModel.setState(vendorModel.getState());
	        newvendorModel.setType(vendorModel.getType());
	        newvendorModel.setManager(vendorModel.getManager());
	        newvendorModel.setRelationshipdate(vendorModel.getRelationshipdate());
	        newvendorModel.setRanktire(vendorModel.getRanktire());
	        return newvendorModel;
	    }

		public VendorModel getVendorById(String vendorid) {
			// TODO Auto-generated method stub
			return vendorrepository.findById(vendorid).get();
		}
}
