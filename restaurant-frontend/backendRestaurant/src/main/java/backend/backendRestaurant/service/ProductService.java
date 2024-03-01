package backend.backendRestaurant.service;

import backend.backendRestaurant.model.Product;
import backend.backendRestaurant.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public Product saveProduct(Product product, MultipartFile image) throws IOException {
        if (image != null && !image.isEmpty()) {
            product.setImage(image.getBytes());
            product.setImageName(image.getOriginalFilename());
        }
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }
    
    public void updateProduct(Long id, String name, String description, int quantity, MultipartFile image, double price) throws IOException {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            product.setName(name);
            product.setDescription(description);
            product.setQuantity(quantity);
            product.setPrice(price);
            if (image != null && !image.isEmpty()) {
                product.setImage(image.getBytes());
                product.setImageName(image.getOriginalFilename());
            }
            productRepository.save(product);
        } else {
            throw new IllegalArgumentException("Product not found");
        }
    }
}
