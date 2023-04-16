package br.ufac.doacao.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.ufac.doacao.model.Donor;
import br.ufac.doacao.service.DonorService;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/donor")
public class DonorController implements ICrudController<Donor> {

    private DonorService service;

    public DonorController(DonorService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Donor> getById(@PathVariable("id") Long id) {
        Donor registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @GetMapping("/a")
    public ResponseEntity<List<Donor>> getAll() {
        List<Donor> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Donor> insert(@RequestBody Donor object) {
        if(object.getUser().getPassword() != null) {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            object.getUser().setPassword(passwordEncoder.encode(object.getUser().getPassword()));
        }
        Donor record = service.save(object);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @PutMapping("/")
    public ResponseEntity<Donor> update(@RequestBody Donor objeto) {
        Donor registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }
    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Donor> getByUserId(@PathVariable("id") Long id) {
        Donor registro = service.getByUserId(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @GetMapping("/search/donor/{fullName}")
    public Page<Donor> searchByfullNameLike(
            @PathVariable("fullName") String fullName,
            @RequestParam(value = "page", required = false, defaultValue = "0") int page) {
        return service.searchByfullNameLike(fullName, page);
    }

    @GetMapping("/")
    public Page<Donor> findByisActive(
            @RequestParam(value = "page", required = false, defaultValue = "0") int page) {
        return service.findAllActive(page);
    }

    @GetMapping("/generate")
    public ResponseEntity<Donor> getGenerate() {

        try {
            File jsonPath = new ClassPathResource("json/donor").getFile();

            File[] listOfFiles = jsonPath.listFiles();

            File jsonFile = listOfFiles[listOfFiles.length - 1];


            ObjectMapper mapper = new ObjectMapper();

            mapper.findAndRegisterModules();

            Donor donor = mapper.readValue(jsonFile/* new File("../src/main/resources/data.json") */,
                    Donor.class);
            System.out.println(donor);

            jsonFile.delete();

            return new ResponseEntity<>(donor, HttpStatus.OK);
        } catch (IOException e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
