package br.ufac.doacao.service;

import br.ufac.doacao.model.Enjoy;
import br.ufac.doacao.repository.EnjoyRepository;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class EnjoyService implements ICrudService<Enjoy> {

    private final EnjoyRepository repo;

    public EnjoyService(EnjoyRepository repo) {
        this.repo = repo;
    }

    @Override
    public Enjoy save(Enjoy object) {
        return repo.save(object);
    }

    public Enjoy getByDonorId(Long donorId, Long campaignId) {
        return repo.findByDonorId(donorId, campaignId).orElse(null);
    }

    @Override
    public Enjoy getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Enjoy> getAll() {
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
