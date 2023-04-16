package br.ufac.doacao.controller;

import br.ufac.doacao.model.Follow;
import br.ufac.doacao.service.FollowService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/follow")
public class FollowController implements ICrudController<Follow> {
    private FollowService service;
    public FollowController(FollowService service) {
        this.service = service;
    }
    @Override
    @PostMapping("/")
    public ResponseEntity<Follow> insert(@RequestBody Follow object) {
        Follow record = service.save(object);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<Follow> getByDonorId(@RequestParam("donorId") Long donorId, @RequestParam("institutionId") Long institutionId) {
        Follow registro = service.getByDonorId(donorId, institutionId);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    @Override
    public ResponseEntity<Follow> getById(Long id) {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public ResponseEntity<List<Follow>> getAll() {
        // TODO Auto-generated method stub
        return null;
    }
    @Override
    public ResponseEntity<Follow> update(Follow object) {
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
