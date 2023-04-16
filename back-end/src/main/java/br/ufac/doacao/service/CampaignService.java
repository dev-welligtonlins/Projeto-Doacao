package br.ufac.doacao.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.ufac.doacao.model.Campaign;
import br.ufac.doacao.repository.CampaignRepository;

@Service
public class CampaignService implements ICrudService<Campaign> {

    private final CampaignRepository repo;

    public CampaignService(CampaignRepository repo) {
        this.repo = repo;
    }

    public Campaign getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public List<Campaign> getAll() {
        return repo.findAll();
    }

    @Override
    public Campaign save(Campaign object) {
        return repo.save(object);
    }

    @Override
    public void delete(Long id) {
        Campaign registro = repo.findById(id).orElse(null);
        registro.setActive(false);
        repo.save(registro);
    }

    public Page<Campaign> findAllActive(int page) {
        PageRequest pageRequest = PageRequest.of(
                page,
                9,
                Sort.Direction.DESC,
                "id");
        return repo.findByActive(pageRequest);
    }

    public Page<Campaign> getByInstitutionId(Long id, int page) {
        PageRequest pageRequest = PageRequest.of(
                page,
                9,
                Sort.Direction.DESC,
                "id");
        return repo.getByInstitutionId(id, pageRequest);
    }

    public Page<Campaign> searchByTitleLike(
            String fantasy_name,
            int page) {
        PageRequest pageRequest = PageRequest.of(
                page,
                9,
                Sort.Direction.DESC,
                "id");

        return repo.searchByTitleLike(fantasy_name, pageRequest);
    }
}
