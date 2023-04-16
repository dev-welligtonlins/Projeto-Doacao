package br.ufac.doacao.controller;

import br.ufac.doacao.model.Trust;
import br.ufac.doacao.service.TrustService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/trust")
public class TrustController implements ICrudController<Trust> {
    private TrustService service;
    public TrustController(TrustService service) {
        this.service = service;
    }
    @Override
    @PostMapping("/")
    public ResponseEntity<Trust> insert(@RequestBody Trust object) {
        Trust record = service.save(object);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<Trust> getByDonorId(@RequestParam("donorId") Long donorId, @RequestParam("institutionId") Long institutionId) {
        Trust registro = service.getByDonorId(donorId, institutionId);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Trust> getById(@PathVariable("id") Long id) {
        Trust registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    @Override
    public ResponseEntity<List<Trust>> getAll() {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public ResponseEntity<Trust> update(Trust object) {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public ResponseEntity<?> delete(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        service.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
