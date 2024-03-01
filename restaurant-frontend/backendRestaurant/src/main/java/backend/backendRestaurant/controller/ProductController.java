package backend.backendRestaurant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import backend.backendRestaurant.service.ProductService;
import backend.backendRestaurant.model.Product;
import java.io.IOException;
import java.util.UUID;
import java.util.Optional;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public ResponseEntity<String> addProduct(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("quantity") int quantity,
            @RequestParam("image") MultipartFile image,
            @RequestParam("price") double price) {

        try {
            if (image.isEmpty()) {
                return ResponseEntity.badRequest().body("Image file is required");
            }

            String imageName = UUID.randomUUID().toString() + "_" + image.getOriginalFilename();

            byte[] imageData = image.getBytes();
            Product product = new Product(name, description, quantity, price, imageData, imageName);
            productService.saveProduct(product);

            return ResponseEntity.status(HttpStatus.CREATED).body("Product added successfully");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to add product: " + e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id) {
        Optional<Product> productOptional = productService.getProductById(id);
        if (productOptional.isPresent()) {
            return ResponseEntity.ok(productOptional.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        try {
            productService.deleteProduct(id);
            return ResponseEntity.ok("Product deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to delete product: " + e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<String> updateProduct(
            @PathVariable Long id,
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("quantity") int quantity,
            @RequestParam("image") MultipartFile image,
            @RequestParam("price") double price) {

        try {
            productService.updateProduct(id, name, description, quantity, image, price);
            return ResponseEntity.ok("Product updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to update product: " + e.getMessage());
        }
    }
}
