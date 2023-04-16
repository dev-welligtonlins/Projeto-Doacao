package br.ufac.doacao.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.ufac.doacao.model.Address;
import br.ufac.doacao.model.Institution;

public interface InstitutionRepository extends JpaRepository<Institution, Long> {
    
    // SELECT DISTINCT i FROM Institution i LEFT JOIN FETCH i.campaign LEFT JOIN FETCH i.campaign.item não funciona
    // @Query("SELECT i FROM Institution i WHERE i.active = true")
    // List<Institution> findByAll(Pageable pageable);

    Page<Institution> findByActive(boolean active, PageRequest pageRequest);

    // SELECT i FROM Institution i LEFT JOIN FETCH i.campaign WHERE i.id = :id
    @Query("SELECT i FROM Institution i WHERE i.id = :id")
    Optional<Institution> findById(Long id);

    @Query("SELECT i FROM Institution i LEFT JOIN Campaign c ON c.institution = i.id WHERE c.id = :id")
    Optional<Institution> getByCampaignId(Long id);

    @Query("SELECT i FROM Institution i WHERE i.user.id = :id")
    Optional<Institution> findByUserId(Long id);

    @Query("SELECT i FROM Institution i WHERE i.pending = false")
    List<Institution> findPendingAll();

    List<Institution> findByAddress(Address address);

    @Query("SELECT i FROM Institution i WHERE i.cnpj LIKE %:cnpj%")
    List<Institution> searchByCnpjLike(@Param("cnpj") String cnpj);

    @Query("SELECT i FROM Institution i WHERE i.fantasy_name LIKE %:fantasy_name% OR i.corporate_name LIKE %:fantasy_name%")
    List<Institution> searchByFantasy_nameLike(@Param("fantasy_name") String fantasy_name);

    @Query("SELECT i FROM Institution i LEFT JOIN Address a ON i.address = a.id WHERE a.city LIKE %:city%")
    Page<Institution> searchByAddressLike(@Param("city") String city,  PageRequest pageable);

    @Query("SELECT i FROM Institution i RIGHT JOIN Follow f ON f.institution.id = i.id WHERE f.user.id = 200")
    Page<Institution> findFollowByUserId(Long id, PageRequest pageRequest);


}
