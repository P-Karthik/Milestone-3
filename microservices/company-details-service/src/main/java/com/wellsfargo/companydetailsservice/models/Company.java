package com.wellsfargo.companydetailsservice.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
//import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="company")
public class Company {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int companyId;
	@Column(unique=true)
	private String companyName;
	private double turnover;
	private String ceo;
	
	@ElementCollection
	@JoinTable(name="company_bod")
	private List<String> boardOfDirectors;
	private String sector;
	private String about;
	@Column(unique=true)
	private String companyCode;
	//@OneToMany
	//private List<StockExchange> seList;
	
	public Company() {
		
	}
	
	public int getCompanyId() {
		return companyId;
	}
	public void setCompanyId(int companyId) {
		this.companyId = companyId;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public double getTurnover() {
		return turnover;
	}
	public void setTurnover(double turnover) {
		this.turnover = turnover;
	}
	public String getCeo() {
		return ceo;
	}
	public void setCeo(String ceo) {
		this.ceo = ceo;
	}
	public List<String> getBoardOfDirectors() {
		return boardOfDirectors;
	}
	public void setBoardOfDirectors(List<String> boardOfDirectors) {
		this.boardOfDirectors = boardOfDirectors;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public String getAbout() {
		return about;
	}
	public void setAbout(String about) {
		this.about = about;
	}
	public String getCompanyCode() {
		return companyCode;
	}
	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}

}
