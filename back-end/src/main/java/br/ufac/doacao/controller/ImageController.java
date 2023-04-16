package br.ufac.doacao.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/image")
public class ImageController {

    @RequestMapping(value = "/{name}", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<InputStreamResource> getImage(@PathVariable("name") String name) {
        try {
            // ClassPathResource uploadPath = new ClassPathResource("upload");
            // System.out.println("Path Upload: " + uploadPath.getURL());
            // System.out.println("Path File Canonical Path: " +
            // uploadPath.getFile().getCanonicalPath() + File.separator + name);
            // System.out.println("Path OIriginal File Name: " +
            // files.getOriginalFilename());
            return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG)
                    .body(new InputStreamResource(
                            new ClassPathResource("upload" + File.separator + name).getInputStream()));
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
