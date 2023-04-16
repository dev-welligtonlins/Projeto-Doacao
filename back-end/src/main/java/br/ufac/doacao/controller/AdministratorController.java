package br.ufac.doacao.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import br.ufac.doacao.model.Administrator;
import br.ufac.doacao.service.AdministratorService;

import java.util.List;

// TODO: [] UTILIZAR ESTILOS DE VALIDAÇÃO DE FORMULÁRIOS DO BOOTSTRAP

// TODO: [PROFESSOR] Problema VLibras Filtro CORS
// TODO: [PROFESSOR] Perspectiva da tabela de endereço para multiplos usos
// TODO: [PROFESSOR] Dúvidas estrutura de pastas dos componentes, quando fica grande e organização dos escopos

// TODO: [OK] Lista de campanhas
// TODO: [OK] Menu superior de usuário logado
// TODO: [FAIL] mensagem de alerta para sucesso, erro e informação
// TODO: [OK] página de checklist para validar instituição
// TODO: [OK] Página de login
// TODO: [FAIL] trocar o template da página inicial pelo da importância de doar?
// TODO: [] Organizar estrutura da página inicial

// TODO: [] Fazer página de denúncia

// TODO: [] Cadastrar pontos de arrecadação na campanha
// TODO: [FAIL] Tentar fazer vlibras funcionar
// TODO: [OK] Ajustar as porcentagens

// TODO: [] categorizar campanhas

// TODO: [] fazer lista de seguidores

// TODO: [] organizar todos os links da aplicação no front-end
/* TODO: [] colocar valor atual no formulário de atualizar. */
/* TODO: [] incrementar valor atual,mas também deixar explícito para o usuário que ele deve incrementar. */

/* TODO: Analisar java records */
/* TODO: Analisar DTO. */

@RestController
@RequestMapping("/administrator")
public class AdministratorController implements ICrudController<Administrator> {

    private AdministratorService service;

    public AdministratorController(AdministratorService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Administrator> getById(@PathVariable("id") Long id) {
        Administrator registro = service.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @GetMapping("/")
    public ResponseEntity<List<Administrator>> getAll() {
        List<Administrator> registros = service.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Administrator> insert(@RequestBody Administrator object) {
        if(object.getUser().getPassword() != null) {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            object.getUser().setPassword(passwordEncoder.encode(object.getUser().getPassword()));
        }
        Administrator record = service.save(object);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<Administrator> update(@RequestBody Administrator objeto) {
        Administrator registro = service.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        service.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Administrator> getByUserId(@PathVariable("id") Long id) {
        Administrator registro = service.getByUserId(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

}
