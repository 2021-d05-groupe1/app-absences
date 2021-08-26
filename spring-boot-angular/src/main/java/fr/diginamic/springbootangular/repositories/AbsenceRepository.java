package fr.diginamic.springbootangular.repositories;

import fr.diginamic.springbootangular.entities.Absence;
import fr.diginamic.springbootangular.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface AbsenceRepository extends JpaRepository <Absence , Long> {
    Optional<Absence> findByDateDebutAndDateFinAndUser(LocalDate dateDebut, LocalDate dateFin, User user);
}
