package br.ufac.doacao.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import br.ufac.doacao.model.User;
import br.ufac.doacao.service.UserService;

public class UserProfileService implements UserDetailsService {

    @Autowired
    private UserService servico;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = servico.getByUsername(username);
        return new UserProfile(user);
    }
    
}
