package backend.backendRestaurant.service;

import backend.backendRestaurant.model.RegistrationForm;
import backend.backendRestaurant.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public String register(RegistrationForm registrationForm) {
        registrationRepository.save(registrationForm);
        return "Registration successful!";
    }

    public List<RegistrationForm> getAllUsers() {
        return registrationRepository.findAll();
    }
}
