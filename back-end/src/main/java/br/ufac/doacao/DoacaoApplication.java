package br.ufac.doacao;

import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@SpringBootApplication
//@EnableAutoConfiguration(exclude = { SecurityAutoConfiguration.class })
@Controller
public class DoacaoApplication {

	@RequestMapping("/")
	@ResponseBody
	public String exemplo() {
		return "the application is working";
	}

	@RequestMapping("/test")
	@ResponseBody
	public String test() {
		return "application test";
	}

	public static void main(String[] args) {
		SpringApplication.run(DoacaoApplication.class, args);
	}

}
