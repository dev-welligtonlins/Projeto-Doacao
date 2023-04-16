package br.ufac.doacao.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import br.ufac.doacao.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

      List<Address> findByCityIsContaining(String city);  
        
}
