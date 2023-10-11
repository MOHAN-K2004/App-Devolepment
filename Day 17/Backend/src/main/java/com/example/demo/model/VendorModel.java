package com.example.demo.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Table(name = "vendors")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VendorModel {
	    @Id
	    private String vendorid; 
	    private String name; 
	    private String vs;
	    private String vsmm; 
	    private String manager; 
	    private String state;
	    private String type; 
	    private String relationshipdate;
	    private String ranktire;
	    
	    private String createdBy;
	    private LocalDateTime createdAt;
	    private LocalDateTime updatedAt;  
}
