package com.wellsfargo.companydetailsservice.service;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.wellsfargo.companydetailsservice.models.IPO;

public interface ipoRepository extends CrudRepository<IPO,Long> {
	List<IPO> findByCompanyName(String company_name);
	List<IPO> findByCompanyNameOrderByOpenDateTimeAsc(String company_name);

	List<IPO> findByCompanyNameAndSeName(String company_name,String se_name);
	List<IPO> findByCompanyNameAndSeNameOrderByOpenDateTimeAsc(String company_name,String se_name);
	List<IPO> findBySeName(String se_name);
	void deleteByCompanyName(String company_name);
}
