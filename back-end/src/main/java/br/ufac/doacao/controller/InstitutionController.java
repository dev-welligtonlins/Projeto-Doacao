package br.ufac.doacao.controller;

import java.util.List;

import org.springframework.core.io.ClassPathResource;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.ufac.doacao.model.Address;
import br.ufac.doacao.model.Institution;
import br.ufac.doacao.service.InstitutionService;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.RequestMethod;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/institution")
public class InstitutionController implements ICrudController<Institution> {

    private InstitutionService service;

    public InstitutionController(InstitutionService service) {
        this.service = service;
    }

    @GetMapping("/")
    public Page<Institution> findByisActive(
            @RequestParam(value = "active", required = false, defaultValue = "true") Boolean active,
            @RequestParam(value = "page", required = false, defaultValue = "0") int page,
            @RequestParam(value = "size", required = false, defaultValue = "6") int size) {
        return service.findByisActive(active, page, size);

    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Institution> insert(@RequestBody Institution object) {
        if (object.getUser().getPassword() != null) {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            object.getUser().setPassword(passwordEncoder.encode(object.getUser().getPassword()));
        }
        Institution record = service.save(object);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/upload-image", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<?> uploadImage(@RequestParam("files") MultipartFile files) {
        try {
            ClassPathResource uploadPath = new ClassPathResource("upload");
            byte[] bytes = files.getBytes();
            Path path = Paths
                    .get(uploadPath.getFile().getCanonicalPath() + File.separator + files.getOriginalFilename());
            Files.write(path, bytes);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /*
     * @RequestMapping(value = "/upload-image", method = RequestMethod.POST,
     * consumes = "multipart/form-data")
     * public ResponseEntity<?> uploadImage(@RequestParam("files") MultipartFile
     * files) {
     * //System.out.println(files.getOriginalFilename());
     * 
     * if (files.isEmpty()) {
     * System.out.println("File empty");
     * }
     * 
     * try {
     * 
     * // File fn = new File("resources/database.db");
     * // fn.getAbsolutePath()
     * 
     * File fn = new File("resources/upload");
     * System.out.println(fn.getAbsolutePath());
     * 
     * byte[] bytes = files.getBytes();
     * Path path = Paths.get(
     * "C:/Users/webacademy10/Desktop/workspace/hands-on-t2-fusion/back-end/src/main/resources/upload/"
     * + files.getOriginalFilename());
     * Files.write(path, bytes);
     * 
     * System.out.println("You successfully uploaded '" +
     * files.getOriginalFilename() + "'");
     * 
     * } catch (IOException e) {
     * e.printStackTrace();
     * }
     * 
     * return null;
     * }
     */

    // @GetMapping("/")
    // public List<Institution> findAll() {
    // return service.findAll();
    // }

    @GetMapping("/{id}")
    public ResponseEntity<Institution> getById(@PathVariable("id") Long id) {
        Institution registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @GetMapping("/campaign/{id}")
    public ResponseEntity<Institution> getByCampaignId(@PathVariable("id") Long id) {
        Institution registro = service.getByCampaignId(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Institution> deleteById(@PathVariable("id") Long id) {
        service.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/pending")
    public ResponseEntity<Institution> save(@RequestBody Institution object) {
        Institution registros = service.save(object);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @GetMapping("/pending")
    public ResponseEntity<List<Institution>> getPendingAll() {
        List<Institution> registros = service.getPendingAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<Institution> update(@RequestBody Institution objeto) {
        Institution registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> delete(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Institution> getByUserId(@PathVariable("id") Long id) {
        Institution registro = service.getByUserId(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @GetMapping("/address/{address}")
    public ResponseEntity<List<Institution>> findByAddress(@PathVariable("address") Address address) {
        List<Institution> registros = service.findByAddress(address);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @GetMapping("/search/cnpj/{cnpj}")
    public ResponseEntity<List<Institution>> searchByCnpjLike(@PathVariable("cnpj") String cnpj) {
        List<Institution> registros = service.searchByCnpjLike(cnpj);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @GetMapping("/search/institution_name/{fantasy_name}")
    public ResponseEntity<List<Institution>> searchByFantasy_nameLike(
            @PathVariable("fantasy_name") String fantasy_name) {
        List<Institution> registros = service.searchByFantasy_nameLike(fantasy_name);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @GetMapping("/search/city/{city}")
    public Page<Institution> searchByAddressLike(
            @PathVariable("city") String city,
            @RequestParam(value = "active", required = false, defaultValue = "true") Boolean active,
            @RequestParam(value = "page", required = false, defaultValue = "0") int page,
            @RequestParam(value = "size", required = false, defaultValue = "5") int size) {
        return service.searchByAddressLike(city, page, size);
    }

    @GetMapping("/follow/{id}")
    public Page<Institution> findFollowByUserId(
            @PathVariable("id") Long id,
            @RequestParam(value = "page", required = false, defaultValue = "0") int page) {
        return service.findFollowByUserId(id, page);
    }

    @Override
    public ResponseEntity<List<Institution>> getAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @GetMapping("/generate")
    public ResponseEntity<Institution> getGenerate() {

        try {
            File jsonPath = new ClassPathResource("json/institution").getFile();

            File[] listOfFiles = jsonPath.listFiles();

            File jsonFile = listOfFiles[listOfFiles.length - 1];

            // for (int i = 0; i < listOfFiles.length; i++) {
            // if (listOfFiles[i].isFile()) {
            // File thatFile = listOfFiles[i];
            // System.out.println("File " + thatFile.getName());
            // }
            // }

            ObjectMapper mapper = new ObjectMapper();

            mapper.findAndRegisterModules();

            Institution institution = mapper.readValue(jsonFile/* new File("../src/main/resources/data.json") */,
                    Institution.class);
            System.out.println(institution);
            // File acc = new File("../src/main/resources/data.json");
            // acc.delete();

            jsonFile.delete();

            return new ResponseEntity<>(institution, HttpStatus.OK);
        } catch (IOException e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
