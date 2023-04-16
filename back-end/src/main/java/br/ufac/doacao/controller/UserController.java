package br.ufac.doacao.controller;

import br.ufac.doacao.model.Campaign;
import br.ufac.doacao.model.Denounce;
import br.ufac.doacao.model.Institution;
import br.ufac.doacao.model.User;
import br.ufac.doacao.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController implements ICrudController<User> {

    private UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable("id") Long id) {
        User registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<User>> getAll() {
        List<User> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<User> insert(@RequestBody User object) {
        User record = service.save(object);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @PutMapping("/")
    public ResponseEntity<User> update(@RequestBody User objeto) {
        User registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> delete(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @GetMapping("/follows/{id}")
    public ResponseEntity<List<Institution>> getUserFollowsById(@PathVariable("id") Long id) {
        List<Institution> registro = service.getUserFollowsById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @GetMapping("/trusts/{id}")
    public ResponseEntity<List<Institution>> getUserTrustsById(@PathVariable("id") Long id) {
        List<Institution> registro = service.getUserTrustsById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @GetMapping("/enjoys/{id}")
    public ResponseEntity<List<Campaign>> getUserEnjoysById(@PathVariable("id") Long id) {
        List<Campaign> registro = service.getUserEnjoysById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @GetMapping("/denounces/{id}")
    public ResponseEntity<List<Denounce>> getUserDenouncesById(@PathVariable("id") Long id) {
        List<Denounce> registro = service.getUserDenouncesById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

}
