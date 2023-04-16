package br.ufac.doacao.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.ufac.doacao.model.Administrator;

public interface AdministratorRepository extends JpaRepository<Administrator, Long> {

    @Query("SELECT a FROM Administrator a WHERE a.user = :id")
    Optional<Administrator> findByUserId(Long id);

}
