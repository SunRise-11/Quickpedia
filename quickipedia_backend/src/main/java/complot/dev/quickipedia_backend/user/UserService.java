package complot.dev.quickipedia_backend.user;

import complot.dev.quickipedia_backend.article.dtos.ArticleResponseDto;
import complot.dev.quickipedia_backend.article.models.Article;
import complot.dev.quickipedia_backend.user.dtos.AddUserDto;
import complot.dev.quickipedia_backend.user.dtos.UserResponseDto;
import complot.dev.quickipedia_backend.user.models.BookmarkedArticle;
import complot.dev.quickipedia_backend.user.models.QuickipediaUser;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class UserService {
    private final JpaUserRepository repo;

    public UserService(JpaUserRepository repo) {
        this.repo = repo;
    }

    public QuickipediaUser findUserByEmail(String email) {
        return repo.findById(email).orElseThrow();
    }

   public QuickipediaUser addUser(AddUserDto userToAdd){
        return repo.save(
                new QuickipediaUser(
                        userToAdd.email(),
                        userToAdd.username(),
                       new ArrayList<BookmarkedArticle>()
                )
                );
   }

    public QuickipediaUser addArticleById(String userId, String articleId){
        QuickipediaUser user = findUserByEmail(userId);

        Article

        user.setBookmarks();
    }
    public UserResponseDto getBookmarksByEmail(String email) {
        return repo.findById(email).orElseThrow().convertToUserDto();
    }

}