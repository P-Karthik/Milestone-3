package com.wellsfargo.excelservice.models;

import java.util.List;

public class ResponseMessage {
	private String msg;
	List<StockPrice> sps;

	public ResponseMessage(String msg, List<StockPrice> sps) {

		this.msg = msg;
		this.sps = sps;
	}
	
	public ResponseMessage(String msg) {
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public List<StockPrice> getSps() {
		return sps;
	}

	public void setSps(List<StockPrice> sps) {
		this.sps = sps;
	}
}


