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
import com.example.demo.model.ServiceModel;
import com.example.demo.service.ServiceService;


@RestController
@RequestMapping(Api.SERVICE)
public class ServiceController {
    @Autowired
    private ServiceService serviceService;

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllServices() {
        ArrayList<ServiceModel> services = serviceService.getAllServices();
        return ResponseEntity.ok().body(services);
    }

    @PostMapping("/postService")
    public ResponseEntity<?> addService(@RequestBody ServiceModel serviceModel) {
        String res = serviceService.addService(serviceModel);
        return ResponseEntity.ok().body(res);
    }

    @PutMapping("/putService")
    public ResponseEntity<?> putService(@RequestParam String sid, @RequestBody ServiceModel serviceModel) {
        Boolean flag = serviceService.putService(sid, serviceModel);
        if (flag)
            return ((BodyBuilder) ResponseEntity.ok()).body("Updated Successfully");
        return ((BodyBuilder) ResponseEntity.notFound()).body("Service Id Not Found");
    }
    
    @DeleteMapping("/deleteService")
    public ResponseEntity<?> deleteService(@RequestParam String sid) {
        Boolean flag = serviceService.deleteService(sid);
        if (flag)
            return ((BodyBuilder) ResponseEntity.ok()).body("Deleted Successfully");
        return ((BodyBuilder) ResponseEntity.notFound()).body("Service Id Not Found");
    }

}