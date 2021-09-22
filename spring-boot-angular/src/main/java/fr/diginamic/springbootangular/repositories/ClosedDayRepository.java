package fr.diginamic.springbootangular.repositories;

import fr.diginamic.springbootangular.entities.ClosedDay;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface ClosedDayRepository extends JpaRepository<ClosedDay, Long> {
    List<ClosedDay> findByCategory(ClosedDay.Category category);
    Optional<ClosedDay> findByDate(LocalDate date);
}








