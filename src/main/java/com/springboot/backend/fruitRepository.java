package com.springboot.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface fruitRepository extends JpaRepository <fruitInfo, Long> {

}
