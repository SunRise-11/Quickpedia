package complot.dev.quickipedia_backend;

import complot.dev.quickipedia_backend.article.ArticleService;

import complot.dev.quickipedia_backend.article.dtos.ArticleResponseDto;
import complot.dev.quickipedia_backend.user.UserService;
import complot.dev.quickipedia_backend.user.dtos.UserResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class Controller {

    private final ArticleService articleService;
    private final UserService userService;

    public Controller(ArticleService service, UserService userService) {
        this.articleService = service;
        this.userService = userService;
    }

    @GetMapping("/hello")
    public String helloTest() {
        return "Hello!";
    }

    @GetMapping("/articles")
    public ResponseEntity<List<ArticleResponseDto>> getAllArticles() {
        return ResponseEntity.ok().body(articleService.getAllArticles());
    }

    @GetMapping("/articles/top")
    public ResponseEntity<List<ArticleResponseDto>> getTopArticles() {

        var articles = articleService.getAllArticles();

        List<ArticleResponseDto> sortedArticles = articles.stream()
                .sorted(Comparator.comparing(ArticleResponseDto::rank))
                .limit(5)
                .toList();
        return ResponseEntity.ok(sortedArticles);
    }

    @GetMapping("/users/{userEmail}")
    public ResponseEntity<UserResponseDto> getUser(@PathVariable String userEmail){
        return ResponseEntity.ok().build();

    }

    //To be removed
    @Deprecated
    private List<ArticleResponseDto> tempList(){
        return List.of(
                new ArticleResponseDto(
                        "Is the sky blue?",
                        "Yes it certainly is",
                        "Controversial",
                        3
                ),
                new ArticleResponseDto(
                        "Is Colin the best coder in the world?",
                        "Yes he certainly is",
                        "Facts",
                        2
                ),
                new ArticleResponseDto(
                        "Is Marisa the best coder in the world?",
                        "Yes she certainly is",
                        "Facts",
                        1
                ),
                new ArticleResponseDto(
                        "What year is it?",
                        "2023",
                        "News",
                        7
                ),

                new ArticleResponseDto(
                        "What happens tomorrow?",
                        "We don't know but it's wednesday",
                        "News",
                        4
                ),

                new ArticleResponseDto(
                        "Where is sweden?",
                        "Northern europe, scandinavia",
                        "Geography",
                        8
                ),

                new ArticleResponseDto(
                        "What year is it next year?",
                        "2024",
                        "News",
                        9
                ),
                new ArticleResponseDto(
                        "How do you cook?",
                        "You mix vegetables and spices",
                        "Food",
                        6
                ),
                new ArticleResponseDto(
                        "Where is portugal?",
                        "Next to spain",
                        "Geography",
                        5
                )
        );
    }
}