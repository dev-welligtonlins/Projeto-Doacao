package br.ufac.doacao.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.ufac.doacao.model.Campaign;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {
    
    @Query("SELECT c FROM Campaign c LEFT JOIN Institution i ON c.institution = i.id WHERE i.active = true")
    Page<Campaign> findByActive(PageRequest pageRequest);

    @Query("SELECT c FROM Campaign c LEFT JOIN Institution i ON c.institution = i.id WHERE i.id = :institutionId")
    Page<Campaign> getByInstitutionId(Long institutionId, PageRequest pageRequest);
    
    @Query("SELECT c FROM Campaign c WHERE c.title LIKE %:title%")
    Page<Campaign> searchByTitleLike(@Param("title") String title,  PageRequest pageable);

}
