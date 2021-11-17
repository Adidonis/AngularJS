package com.springboot.backend;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "fruitInfo")
public class fruitInfo{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "FruitName")
    private String fruitName;

    @Column(name = "Colour")
    private String Colour;

    @Column(name = "Price")
    private int Price;

    public fruitInfo(){
    }

    public fruitInfo(String fruitName, String colour, int price) {
        this.fruitName = fruitName;
        this.Colour = colour;
        this.Price = price;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFruitName() {
        return fruitName;
    }

    public void setFruitName(String fruitName) {
        this.fruitName = fruitName;
    }

    public String getColour() {
        return Colour;
    }

    public void setColour(String colour) {
        Colour = colour;
    }

    public int getPrice() {
        return Price;
    }

    public void setPrice(int price) {
        Price = price;
    }
    // @Override
	// public String toString() {
	// 	return "fruitInfo [id=" + id + ", FruitName=" + fruitName + ", Colour=" + Colour + ", Price=" + Price + "]";
    // }

}
