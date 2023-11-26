package complot.dev.quickipedia_backend;

import complot.dev.quickipedia_backend.article.ArticleService;

import complot.dev.quickipedia_backend.article.dtos.AddArticleDto;
import complot.dev.quickipedia_backend.article.dtos.ArticleResponseDto;
import complot.dev.quickipedia_backend.user.UserService;
//import complot.dev.quickipedia_backend.user.dtos.AddUserDto;
import complot.dev.quickipedia_backend.user.dtos.AddUserDto;
import complot.dev.quickipedia_backend.user.dtos.UserResponseDto;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
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

    // here
    @GetMapping("/public")
    public ResponseEntity<String> helloWorld() {
        return ResponseEntity.ok().body("Hello World");
    }

    /*@GetMapping("/secure")
    public ResponseEntity<String> privateSite(JwtAuthenticationToken user) {
        var name = user.getTokenAttributes().get("name");

        return ResponseEntity.ok().body("Hello " + name);
    }*/
    //to here

    @GetMapping("/status")
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
    public ResponseEntity<UserResponseDto> getUser(@PathVariable String userEmail) {

        return ResponseEntity.ok(
                userService.findUserByEmail(userEmail).convertToUserDto()
        );
    }

    @PostMapping("/users")
    public ResponseEntity<UserResponseDto> addUser(
            @RequestBody AddUserDto userToAdd
    ) {

        return ResponseEntity.ok(
                userService.addUser(userToAdd).convertToUserDto()
        );
    }

    @PostMapping("/users/{userId}")
    public ResponseEntity<UserResponseDto> addBookmarkToUser(
            @PathVariable String userId,
            @RequestBody AddArticleDto addArticleDto
    ) {
        return ResponseEntity.ok(
                userService.addBookmarkById(userId, addArticleDto.id()).convertToUserDto()
        );
    }

    @DeleteMapping("/users/{userId}")
    public ResponseEntity<UserResponseDto> deleteBookmarkFromUser(
            @PathVariable String userId,
            @RequestBody AddArticleDto addArticleDto
    ) {
        userService.deleteBookmarkById(userId, addArticleDto.id());
        return ResponseEntity.noContent().build();
    }

}