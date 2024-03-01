package backend.backendRestaurant.controller;

import backend.backendRestaurant.model.LoginRequest;
import backend.backendRestaurant.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        return userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
    }
}
