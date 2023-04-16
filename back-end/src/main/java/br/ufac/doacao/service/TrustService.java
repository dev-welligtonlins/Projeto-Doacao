package br.ufac.doacao.service;

import br.ufac.doacao.model.Trust;
import br.ufac.doacao.repository.TrustRepository;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TrustService implements ICrudService<Trust> {

    private final TrustRepository repo;

    public TrustService(TrustRepository repo) {
        this.repo = repo;
    }

    @Override
    public Trust save(Trust object) {
        return repo.save(object);
    }

    public Trust getByDonorId(Long donorId, Long campaignId) {
        return repo.findByDonorId(donorId, campaignId).orElse(null);
    }

    @Override
    public Trust getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Trust> getAll() {
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
