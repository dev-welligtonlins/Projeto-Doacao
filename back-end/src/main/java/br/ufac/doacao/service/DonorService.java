package br.ufac.doacao.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.ufac.doacao.model.Donor;
import br.ufac.doacao.repository.DonorRepository;

import java.util.List;

@Service
public class DonorService implements ICrudService<Donor> {

    private final DonorRepository repo;

    public DonorService(DonorRepository repo) {
        this.repo = repo;
    }

    public Donor getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public List<Donor> getAll() {
        return repo.findAll();
    }

    @Override
    public Donor save(Donor object) {
        return repo.save(object);
    }

    @Override
    public void delete(Long id) {
        Donor registro = repo.findById(id).orElse(null);
        registro.setActive(false);
        repo.save(registro);
    }

    public Donor getByUserId(Long id) {
        return repo.findByUserId(id).orElse(null);
    }

    public Page<Donor> searchByfullNameLike(
            String fullName,
            int page) {
        PageRequest pageRequest = PageRequest.of(
                page,
                9,
                Sort.Direction.DESC,
                "id");

        return repo.searchByfullNameLike(fullName, pageRequest);
    }

    public Page<Donor> findAllActive(int page) {
        PageRequest pageRequest = PageRequest.of(
                page,
                9,
                Sort.Direction.DESC,
                "id");
        return repo.findByActive(pageRequest);
    }

}
