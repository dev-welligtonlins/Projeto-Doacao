package br.ufac.doacao.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.ufac.doacao.model.Address;
import br.ufac.doacao.model.Institution;
import br.ufac.doacao.repository.InstitutionRepository;

@Service
public class InstitutionService implements ICrudService<Institution> {

    @Autowired
    private final InstitutionRepository repo;

    public InstitutionService(InstitutionRepository repo) {
        this.repo = repo;
    }

    public Page<Institution> findByisActive(Boolean active, int page, int size){
        PageRequest pageRequest = PageRequest.of(
            page,
            size,
            Sort.Direction.DESC,
            "id");

        return repo.findByActive(active, pageRequest);
    }

    @Override
    public Institution save(Institution object) {
        return repo.save(object);
    }

    public Institution getByCampaignId(Long id) {
        return repo.getByCampaignId(id).orElse(null);
    }

    public Institution getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public void deleteById(long id) {
        Institution registro = repo.findById(id).orElse(null);
        registro.setActive(false);
        repo.save(registro);
    }

    public List<Institution> getPendingAll() {
        return repo.findPendingAll();
    }

    @Override
    public void delete(Long id) {
        // TODO Auto-generated method stub

    }

    public Institution getByUserId(Long id) {
        return repo.findByUserId(id).orElse(null);
    }

    public List<Institution> findByAddress(Address address) {
        return repo.findByAddress(address);
    }

    public List<Institution> searchByCnpjLike(String cnpj) {
        return repo.searchByCnpjLike(cnpj);
    }

    public List<Institution> searchByFantasy_nameLike(String fantasy_name) {
        return repo.searchByFantasy_nameLike(fantasy_name);
    }

    public Page<Institution> searchByAddressLike(
            String city,
            int page,
            int size) {
        PageRequest pageRequest = PageRequest.of(
                page,
                size,
                Sort.Direction.ASC,
                "address.city");

        return repo.searchByAddressLike(city, pageRequest);
    }

    public Page<Institution> findFollowByUserId(Long id, int page) {
        PageRequest pageRequest = PageRequest.of(
                page,
                9,
                Sort.Direction.DESC,
                "id");
        return repo.findFollowByUserId(id, pageRequest);
    }

    @Override
    public List<Institution> getAll() {
        // TODO Auto-generated method stub
        return null;
    }

    
}
