package com.wellsfargo.sectorservice.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.wellsfargo.sectorservice.models.Sector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SectorService {

    @Autowired
    private SectorRepository sectorRepository;

    public List<Sector> getAllSectors() {
        List<Sector> sectorsList = new ArrayList<>();
        sectorRepository.findAll().forEach(sectorsList::add);
        return sectorsList;
    }

    public void addSector(Sector sector) {
        sectorRepository.save(sector);
    }

    public void updateSector(Sector sector) {
        sectorRepository.save(sector);
    }

    public Sector getSectorById(Integer sectorId) {
        return sectorRepository.findById(sectorId).orElse(null);
	}

	public Sector getAllSectorsByName(String sector_name) {
		return sectorRepository.findBySectorName(sector_name).orElse(null);
	}
    
}