package br.ufac.doacao.controller;

import java.security.Principal;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ufac.doacao.model.User;
import br.ufac.doacao.service.UserService;

@RestController
@RequestMapping("/login")
public class LoginController {

    private final UserService service;

    public LoginController(UserService service) {
        this.service = service;
    }

    @GetMapping("/")
    public ResponseEntity<User> getUser() {
        Principal principal = SecurityContextHolder.getContext().getAuthentication();
        User user = service.getByUsername(principal.getName());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
