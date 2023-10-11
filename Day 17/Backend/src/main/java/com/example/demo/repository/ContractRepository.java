package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.ContractModel;

public interface ContractRepository extends CrudRepository<ContractModel,String> {

}
