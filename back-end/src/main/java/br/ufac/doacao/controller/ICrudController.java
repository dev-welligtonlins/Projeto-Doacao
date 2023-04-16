package br.ufac.doacao.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;

public interface ICrudController<T> {

    public ResponseEntity<T> insert(T object);
    public ResponseEntity<T> getById(Long id);
    public ResponseEntity<List<T>> getAll();
    public ResponseEntity<T> update(T object);
    public ResponseEntity<?> delete(Long id);

}
