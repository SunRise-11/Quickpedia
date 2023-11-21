package complot.dev.quickipedia_backend;

import complot.dev.quickipedia_backend.dtos.ArticleResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class Controller {

    @GetMapping("/hello")
    public String helloTest() {
        return "Hello!";
    }

    @GetMapping("/getAllArticles")
    public ResponseEntity<List<ArticleResponseDto>> getAllArticles() {

        return ResponseEntity.ok().body(
                List.of(
                        new ArticleResponseDto(
                                "Is the sky blue?",
                                "Yes it certainly is",
                                "Controversial",
                                1
                        ),
                        new ArticleResponseDto(
                                "Is Colin the best coder in the world?",
                                "Yes he certainly is",
                                "Facts",
                                2
                        )
                )

        );
    }
}