package complot.dev.quickipedia_backend;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class Controller {

    @GetMapping("/hello")
    public String helloTest(){
        return "Hello!";
    }

}