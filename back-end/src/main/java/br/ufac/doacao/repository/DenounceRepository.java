package br.ufac.doacao.repository;

import br.ufac.doacao.model.Denounce;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DenounceRepository extends JpaRepository<Denounce, Long> {

}
