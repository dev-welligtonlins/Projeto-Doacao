package br.ufac.doacao.repository;

import br.ufac.doacao.model.Campaign;
import br.ufac.doacao.model.Denounce;
import br.ufac.doacao.model.Institution;
import br.ufac.doacao.model.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    @Query("SELECT i FROM Institution i LEFT JOIN FETCH Follow f ON f.institution = i.id WHERE f.user.id = :id")
    List<Institution> getUserFollowsById(Long id);

    @Query("SELECT i FROM Institution i LEFT JOIN FETCH Trust t ON t.institution = i.id WHERE t.user.id = :id")
    List<Institution> getUserTrustsById(Long id);

    @Query("SELECT c FROM Campaign c LEFT JOIN FETCH Enjoy e ON e.campaign = c.id WHERE e.user.id = :id")
    List<Campaign> getUserEnjoysById(Long id);

    @Query("SELECT d FROM Denounce d WHERE d.user.id = :id")
    List<Denounce> getUserDenouncesById(Long id);

}
