package br.ufac.doacao.service;

import br.ufac.doacao.model.Follow;
import br.ufac.doacao.repository.FollowRepository;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class FollowService implements ICrudService<Follow> {

    private final FollowRepository repo;

    public FollowService(FollowRepository repo) {
        this.repo = repo;
    }

    @Override
    public Follow save(Follow object) {
        return repo.save(object);
    }

    public Follow getByDonorId(Long donorId, Long campaignId) {
        return repo.findByDonorId(donorId, campaignId).orElse(null);
    }

    @Override
    public Follow getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Follow> getAll() {
        return repo.findAll();
    }

    @Override
    public void delete(Long id) {
        // TODO Auto-generated method stub
        
    }

    public void deleteById(Long id) {
        repo.deleteById(id);
    }

}
