package br.ufac.doacao.repository;

import br.ufac.doacao.model.Enjoy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface EnjoyRepository extends JpaRepository<Enjoy, Long> {

    /*@Query("SELECT MAX(i) FROM Enjoy i WHERE i.donor.id = :#{#enjoy.donor}")
    Optional<Enjoy> findByDonorId(@Param("enjoy") Enjoy enjoy);*/
    @Query("SELECT MAX(i) FROM Enjoy i WHERE i.user.id = :userId AND i.campaign.id = :campaignId")
    Optional<Enjoy> findByDonorId(Long userId, Long campaignId);
}
