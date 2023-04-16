package br.ufac.doacao.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.ufac.doacao.model.Address;
import br.ufac.doacao.service.AddressService;

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
@RequestMapping("/address")
public class AddressController implements ICrudController<Address> {

    private AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Address> getById(@PathVariable("id") Long id) {
        Address registro = addressService.getById(id);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Address>> getAll() {
        List<Address> registros = addressService.getAll();
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Address> insert(@RequestBody Address object) {
        Address record = addressService.save(object);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }

    @PutMapping("/")
    public ResponseEntity<Address> update(@RequestBody Address objeto) {
        Address registro = addressService.save(objeto);
        return new ResponseEntity<>(registro, HttpStatus.OK);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        addressService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // https://www.baeldung.com/spring-jpa-like-queries  
    // https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories
    @GetMapping("/city/{city}")
    public ResponseEntity<List<Address>> findByCityIsContaining(@PathVariable("city") String city) {
        List<Address> registros = addressService.findByCitIsContaining(city);
        return new ResponseEntity<>(registros, HttpStatus.OK);
    }    
    
}
