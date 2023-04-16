package br.ufac.doacao.controller;

import br.ufac.doacao.model.Denounce;
import br.ufac.doacao.service.DenounceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/denounce")
public class DenounceController implements ICrudController<Denounce> {

    private DenounceService service;

    public DenounceController(DenounceService service) {
        this.service = service;
    }

    @GetMapping("/")
    public ResponseEntity<List<Denounce>> getAll() {
        List<Denounce> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Denounce> insert(@RequestBody Denounce object) {
        Denounce record = service.save(object);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Denounce> getById(@PathVariable("id") Long id) {
        Denounce registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<Denounce> update(@RequestBody Denounce objeto) {
        Denounce registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id)  {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/accept")
    public ResponseEntity<Denounce> save(@RequestBody Denounce object) {
        Denounce registros = service.save(object);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

}
