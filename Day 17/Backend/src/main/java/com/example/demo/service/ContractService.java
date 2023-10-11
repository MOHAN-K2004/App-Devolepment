package com.example.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ContractModel;
import com.example.demo.repository.ContractRepository;

@Service
public class ContractService {
    
    @Autowired
    private ContractRepository contractRepository;

    public ArrayList<ContractModel> getAllContracts() {
        return null;
    }

	public ContractRepository getContractRepository() {
		return contractRepository;
	}

	public void setContractRepository(ContractRepository contractRepository) {
		this.contractRepository = contractRepository;
	}

}