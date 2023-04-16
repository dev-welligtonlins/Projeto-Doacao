package br.ufac.doacao.repository;

import br.ufac.doacao.model.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Long> {
    @Query("SELECT MAX(f) FROM Follow f WHERE f.user.id = :userId AND f.institution.id = :institutionId") // Precisa where no dono e instituição ao mesmo tempo
    Optional<Follow> findByDonorId(Long userId, Long institutionId);
}
