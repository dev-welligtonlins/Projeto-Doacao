package br.ufac.doacao.service;

import org.springframework.stereotype.Service;

import br.ufac.doacao.model.Address;
import br.ufac.doacao.repository.AddressRepository;

import java.util.List;

@Service
public class AddressService implements ICrudService<Address> {

    private final AddressRepository repo;

    public AddressService(AddressRepository repo) {
        this.repo = repo;
    }

    @Override
    public Address save(Address object) {
        return repo.save(object);
    }

    @Override
    public Address getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public List<Address> getAll() {
        return repo.findAll();
    }

    @Override
    public void delete(Long id) {
        // TODO Auto-generated method stub
        
    }

    public List<Address> findByCitIsContaining(String city){
        return repo.findByCityIsContaining(city);
    }

}
