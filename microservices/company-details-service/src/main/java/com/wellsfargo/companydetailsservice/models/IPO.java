package com.wellsfargo.companydetailsservice.models;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ipo_details")
public class IPO {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String companyName;
	private String seName;
	private double pricePerShare;
	private double totalShares;
	private Timestamp openDateTime;
	private String remarks;
	
	public IPO() {
		
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getSeName() {
		return seName;
	}
	public void setSeName(String seName) {
		this.seName = seName;
	}
	public double getPricePerShare() {
		return pricePerShare;
	}
	public void setPricePerShare(double pricePerShare) {
		this.pricePerShare = pricePerShare;
	}
	public double getTotalShares() {
		return totalShares;
	}
	public void setTotalShares(double totalShares) {
		this.totalShares = totalShares;
	}
	public Timestamp getOpenDateTime() {
		return openDateTime;
	}
	public void setOpenDateTime(Timestamp openDateTime) {
		this.openDateTime = openDateTime;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	
}
