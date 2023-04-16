package br.ufac.doacao.service;

import org.springframework.stereotype.Service;

import br.ufac.doacao.model.Administrator;
import br.ufac.doacao.repository.AdministratorRepository;

import java.util.List;

@Service
public class AdministratorService implements ICrudService<Administrator> {

    private final AdministratorRepository repo;

    public AdministratorService(AdministratorRepository repo) {
        this.repo = repo;
    }

    @Override
    public Administrator save(Administrator object) {
        return repo.save(object);
    }

    @Override
    public Administrator getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Administrator> getAll() {
        return repo.findAll();
    }

    @Override
    public void delete(Long id) {
        Administrator registro = repo.findById(id).orElse(null);
        registro.setActive(false);
        repo.save(registro);
    }

    public Administrator getByUserId(Long id) {
        return repo.findById(id).orElse(null);
    }

}
