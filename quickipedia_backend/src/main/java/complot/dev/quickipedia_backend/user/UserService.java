package complot.dev.quickipedia_backend.user;

import complot.dev.quickipedia_backend.article.dtos.ArticleResponseDto;
import complot.dev.quickipedia_backend.article.models.Article;
import complot.dev.quickipedia_backend.user.dtos.AddUserDto;
import complot.dev.quickipedia_backend.user.dtos.UserResponseDto;
import complot.dev.quickipedia_backend.user.models.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final JpaUserRepository repo;

    public UserService(JpaUserRepository repo) {
        this.repo = repo;
    }

    public User findUserByEmail(String email) {
        return repo.findById(email).orElseThrow();
    }

   /* public User addUser(AddUserDto userToAdd){
        repo.save(
                new User(
                        userToAdd.email(),
                        userToAdd.username(),
                        new List<Article>()
                )
        )
    }*/
    public UserResponseDto getBookmarksByEmail(String email) {
        return repo.findById(email).orElseThrow().convertToUserDto();
    }

}