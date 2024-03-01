package backend.backendRestaurant.repository;

import backend.backendRestaurant.model.RegistrationForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<RegistrationForm, Long> {
}

