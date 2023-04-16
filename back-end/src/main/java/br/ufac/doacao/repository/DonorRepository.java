package br.ufac.doacao.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.ufac.doacao.model.Donor;

public interface DonorRepository extends JpaRepository<Donor, Long> {

    // @Query("SELECT d FROM Donor d LEFT JOIN User u ON d.user = u.id WHERE u.id = :id")
    Optional<Donor> findByUserId(Long id);

    @Query("SELECT d FROM Donor d WHERE d.fullName LIKE %:fullName%")
    Page<Donor> searchByfullNameLike(@Param("fullName") String fullName,  PageRequest pageable);

    @Query("SELECT d FROM Donor d WHERE d.active = true")
    Page<Donor> findByActive(PageRequest pageRequest);

}
