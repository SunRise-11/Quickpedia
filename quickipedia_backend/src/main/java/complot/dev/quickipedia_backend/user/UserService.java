package complot.dev.quickipedia_backend.user;

import complot.dev.quickipedia_backend.article.JpaArticleRepository;
import complot.dev.quickipedia_backend.article.models.Article;
import complot.dev.quickipedia_backend.user.dtos.AddUserDto;
import complot.dev.quickipedia_backend.user.dtos.UserResponseDto;
import complot.dev.quickipedia_backend.user.models.BookmarkedArticle;
import complot.dev.quickipedia_backend.user.models.QuickipediaUser;
import org.springframework.stereotype.Service;

import java.util.ArrayList;


@Service
public class UserService {
    private final JpaUserRepository userRepo;
    private final JpaArticleRepository articleRepo;


    public UserService(JpaUserRepository userRepo, JpaArticleRepository articleRepo) {
        this.userRepo = userRepo;
        this.articleRepo = articleRepo;
    }

    public QuickipediaUser findUserByEmail(String email) {
        return userRepo.findById(email).orElseThrow();
    }

    public QuickipediaUser addUser(AddUserDto userToAdd) {
        return userRepo.save(
                new QuickipediaUser(
                        userToAdd.email(),
                        userToAdd.username(),
                        new ArrayList<BookmarkedArticle>()
                )
        );
    }

    public QuickipediaUser addBookmarkById(String userId, String articleId) {
        QuickipediaUser user = findUserByEmail(userId);

        if (user.isAlreadyAdded(articleId)) {
            throw new IllegalArgumentException("You can't add '" + articleId + "' twice");
        } else {
            Article articleToAdd = articleRepo.findById(articleId).orElseThrow();
            user.addBookmark(articleToAdd);
            return userRepo.save(user);
        }
    }

    public void deleteBookmarkById(String userId, String articleId) {
        QuickipediaUser user = findUserByEmail(userId);
        userRepo.delete(user);

        user.setBookmarks(
                user.getBookmarks().stream()
                        .filter(
                                bookmark -> !bookmark.getArticle().getId().equals(articleId))
                        .toList()
        );
        userRepo.save(user);
    }

    public UserResponseDto getBookmarksByEmail(String email) {
        return userRepo.findById(email).orElseThrow().convertToUserDto();
    }

}