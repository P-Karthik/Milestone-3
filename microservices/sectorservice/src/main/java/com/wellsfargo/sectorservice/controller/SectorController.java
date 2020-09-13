package com.wellsfargo.sectorservice.controller;

import java.util.List;
import java.util.Optional;

import com.wellsfargo.sectorservice.models.Sector;
import com.wellsfargo.sectorservice.service.SectorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SectorController {

    @Autowired
    private SectorService sectorService;

    @GetMapping("/sectors")
    public List<Sector> getAllSectors() {
        return sectorService.getAllSectors();
    }
    
    @PostMapping("/sectors/name")
    public Sector getAllSectorsByName(@RequestBody String sector_name) {
        return sectorService.getAllSectorsByName(sector_name);
    }   
    

    @PostMapping("/sectors/add")
    public void addSector(Sector sector) {
        sectorService.addSector(sector);
    }

    @PutMapping("/sectors/update")
    public void updateSector(Sector sector) {
        sectorService.updateSector(sector);
    }

    @GetMapping("/sectors/id")
    public Sector getSectorById(@PathVariable Integer sectorId) {
        return sectorService.getSectorById(sectorId);
    }


}