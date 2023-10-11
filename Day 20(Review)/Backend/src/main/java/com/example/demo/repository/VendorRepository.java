package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.VendorModel;

public interface VendorRepository extends CrudRepository<VendorModel, String> {

}
