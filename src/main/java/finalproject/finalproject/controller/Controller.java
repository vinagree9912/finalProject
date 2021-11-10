package finalproject.finalproject.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @GetMapping(path = "/hola")
    public ResponseEntity<String > sss ( ){
        return new ResponseEntity<String>("holamundo",HttpStatus.OK);
    }
}