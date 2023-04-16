package br.ufac.doacao.service;

import br.ufac.doacao.model.Denounce;
import br.ufac.doacao.repository.DenounceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DenounceService implements ICrudService<Denounce> {

    private final DenounceRepository repo;

    public DenounceService(DenounceRepository repo) {
        this.repo = repo;
    }

    public List<Denounce> getAll() {
        return repo.findAll();
    }

    @Override
    public Denounce save(Denounce object) {
        return repo.save(object);
    }

    @Override
    public Denounce getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public void delete(Long id) {
        Denounce registro = repo.findById(id).orElse(null);
        registro.setActive(false);
        repo.save(registro);
    }

}
