package com.springboot.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class fruitModel 
{
    @Autowired 
	private fruitRepository fruitRepo;


	public List<fruitInfo> getfruitInfo(){
		return fruitRepo.findAll();
	}

	public Optional<fruitInfo> getfruitInfobyId(String id) {
		return fruitRepo.findById((long) Integer.parseInt(id));
	}
	
	public void setfruitInfo(fruitInfo fInfo) {
		fruitRepo.save(fInfo);
	}

    public static void add(fruitInfo fInfo)  {
    }

}
