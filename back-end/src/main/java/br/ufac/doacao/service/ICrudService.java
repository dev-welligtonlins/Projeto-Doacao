package br.ufac.doacao.service;

import java.util.List;

public interface ICrudService<T> {

    public T save(T object);

    public T getById(Long id);

    public List<T> getAll();

    public void delete(Long id);

}
