package br.ufac.doacao.service;

import br.ufac.doacao.model.Campaign;
import br.ufac.doacao.model.Denounce;
import br.ufac.doacao.model.Institution;
import br.ufac.doacao.model.User;
import br.ufac.doacao.repository.UserRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements ICrudService<User> {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public List<User> getAll() {
        return repo.findAll();
    }

    @Override
    public User save(User object) {
        return repo.save(object);
    }

    public User getByUsername(String username) {
        return repo.findByUsername(username);
    }

    @Override
    public void delete(Long id) {
        // TODO Auto-generated method stub
        
    }

    public List<Institution> getUserFollowsById(Long id) {
        return repo.getUserFollowsById(id);
    }

    public List<Institution> getUserTrustsById(Long id) {
        return repo.getUserTrustsById(id);
    }

    public List<Campaign> getUserEnjoysById(Long id) {
        return repo.getUserEnjoysById(id);
    }

    public List<Denounce> getUserDenouncesById(Long id) {
        return repo.getUserDenouncesById(id);
    }

}
