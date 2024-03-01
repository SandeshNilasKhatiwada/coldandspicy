package backend.backendRestaurant.controller;

import backend.backendRestaurant.model.RegistrationForm;
import backend.backendRestaurant.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping("/api/register")
    public String register(@RequestBody RegistrationForm registrationForm) {
        return registrationService.register(registrationForm);
    }

        @GetMapping("/api/users")
    public List<RegistrationForm> getAllUsers() {
        return registrationService.getAllUsers();
    }
}
