package com.springboot.backend;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class fruitController
{

    @Autowired
    fruitModel fModel;

    @GetMapping("fruits")
        private List<fruitInfo> findAll() {
        return fModel.getfruitInfo();
        }

    @PostMapping("fruits")
        public void add(@RequestBody  fruitInfo fInfo){
             fModel.setfruitInfo(fInfo);
        }

        public void add(fruitModel fModel) {
        }    
    

}