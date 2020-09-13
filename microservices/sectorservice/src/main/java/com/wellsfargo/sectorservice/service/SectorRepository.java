package com.wellsfargo.sectorservice.service;

import com.wellsfargo.sectorservice.models.Sector;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface SectorRepository extends CrudRepository<Sector, Integer> {
    Optional<Sector> findBySectorName(String sector_name);
}