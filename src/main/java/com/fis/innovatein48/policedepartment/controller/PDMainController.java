package com.fis.innovatein48.policedepartment.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fis.innovatein48.policedepartment.entities.EvidenceForm;

@Controller
public class PDMainController {

	@RequestMapping("/index")
	public String template()
	{
		return "index";
	}
	
	
	@RequestMapping(value ="/register")
	public String saveEvidenceForm(@RequestBody EvidenceForm evidenceForm)
	{
		System.out.println(evidenceForm.getCaseno());
		System.out.println(evidenceForm.getMessage());
		
		System.out.println(evidenceForm.getImage());
		return "index";
	}
	
	@RequestMapping(value ="/getEvidence",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<EvidenceForm> getEvidenceForm(@RequestBody EvidenceForm evidenceForm)
	{
		System.out.println("inquiry----");
		List<EvidenceForm> list = new ArrayList<>();
		EvidenceForm form1 = new EvidenceForm();
		form1.setCaseno("1");
		form1.setEvidancename("eviname");
		form1.setMessage("no message");
		form1.setOfficer("good officer");
		form1.setPhone("12345678");
		
		list.add(form1);
		
		System.out.println(evidenceForm.getCaseno());
		
		return list;
	}
}
