package br.ufac.doacao.controller;

import br.ufac.doacao.model.Enjoy;
import br.ufac.doacao.service.EnjoyService;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/enjoy")
public class EnjoyController implements ICrudController<Enjoy> {
    private EnjoyService service;

    public EnjoyController(EnjoyService service) {
        this.service = service;
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Enjoy> insert(@RequestBody Enjoy object) {
        Enjoy record = service.save(object);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<Enjoy> getByDonorId(@RequestParam("donorId") Long donorId,
            @RequestParam("campaignId") Long campaignId) {
        Enjoy registro = service.getByDonorId(donorId, campaignId);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Enjoy> getById(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<List<Enjoy>> getAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<Enjoy> update(Enjoy object) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<?> delete(Long id) {
        service.delete(id);
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        service.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
