package backend.backendRestaurant.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy =GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private int quantity;
    private double price;

    @Lob
    private byte[] image;
    private String imageName;

    public Product() {
    }

    public Product(String name, String description, int quantity, double price, byte[] image, String imageName) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.image = image;
        this.imageName = imageName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public void updateDetails(String name, String description, int quantity, byte[] image, String imageName, double price) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        if (image != null) {
            this.image = image;
            this.imageName = imageName;
        }
    }
}
