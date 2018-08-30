package com.fis.innovatein48.policedepartment.entities;

import org.springframework.web.multipart.MultipartFile;

public class EvidenceForm {
	private String caseno;
	private String evidancename;
	private String officer;
	private String phone;
	private String message;
	private MultipartFile file;

	public String getCaseno() {
		return caseno;
	}

	public void setCaseno(String caseno) {
		this.caseno = caseno;
	}

	public String getEvidancename() {
		return evidancename;
	}

	public void setEvidancename(String evidancename) {
		this.evidancename = evidancename;
	}

	public String getOfficer() {
		return officer;
	}

	public void setOfficer(String officer) {
		this.officer = officer;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public MultipartFile getImage() {
		return file;
	}

	public void setImage(MultipartFile file) {
		this.file = file;
	}

}
