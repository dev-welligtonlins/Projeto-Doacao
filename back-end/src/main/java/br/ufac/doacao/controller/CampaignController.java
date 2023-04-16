package br.ufac.doacao.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.core.io.ClassPathResource;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.ufac.doacao.model.Campaign;
import br.ufac.doacao.service.CampaignService;

@RestController
@RequestMapping("/campaign")
public class CampaignController implements ICrudController<Campaign> {

    private CampaignService service;

    public CampaignController(CampaignService service) {
        this.service = service;
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

    @GetMapping("/{id}")
    public ResponseEntity<Campaign> getById(@PathVariable("id") Long id) {
        Campaign registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @GetMapping("/a")
    public ResponseEntity<List<Campaign>> getAll() {
        List<Campaign> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    // TODO: não possibiltar cadastrar itens com campos nulos
    @Override
    @PostMapping("/")
    public ResponseEntity<Campaign> insert(@RequestBody Campaign object) {
        Campaign record = service.save(object);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @PutMapping("/")
    public ResponseEntity<Campaign> update(@RequestBody Campaign objeto) {
        System.out.println(objeto);
        Campaign registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> delete(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @GetMapping("/")
    public Page<Campaign> findByisActive(
            @RequestParam(value = "page", required = false, defaultValue = "0") int page) {
        return service.findAllActive(page);
    }

    @GetMapping("/institution/{id}")
    public Page<Campaign> getByInstitutionId(
            @PathVariable("id") Long id,
            @RequestParam(value = "page", required = false, defaultValue = "0") int page) {
        return service.getByInstitutionId(id, page);
    }

    @GetMapping("/search/campaign/{title}")
    public Page<Campaign> searchByInstitutionLike(
            @PathVariable("title") String title,
            @RequestParam(value = "page", required = false, defaultValue = "0") int page) {
        return service.searchByTitleLike(title, page);
    }

    @GetMapping("/generate")
    public ResponseEntity<Campaign> getGenerate() {

        try {
            File jsonPath = new ClassPathResource("json/campaign").getFile();

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

            Campaign campaign = mapper.readValue(jsonFile/* new File("../src/main/resources/data.json") */,
            Campaign.class);
            System.out.println(campaign);
            // File acc = new File("../src/main/resources/data.json");
            // acc.delete();

            jsonFile.delete();

            return new ResponseEntity<>(campaign, HttpStatus.OK);
        } catch (IOException e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
