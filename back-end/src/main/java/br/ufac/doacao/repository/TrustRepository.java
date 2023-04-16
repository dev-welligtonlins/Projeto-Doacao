package br.ufac.doacao.repository;

import br.ufac.doacao.model.Trust;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TrustRepository extends JpaRepository<Trust, Long> {
    @Query("SELECT MAX(t) FROM Trust t WHERE t.user.id = :userId AND t.institution.id = :institutionId")
    Optional<Trust> findByDonorId(Long userId, Long institutionId);
}
