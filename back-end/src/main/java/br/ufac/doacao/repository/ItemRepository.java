package br.ufac.doacao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.ufac.doacao.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
