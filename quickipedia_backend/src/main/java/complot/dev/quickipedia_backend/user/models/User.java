package complot.dev.quickipedia_backend.user.models;

import complot.dev.quickipedia_backend.article.dtos.ArticleResponseDto;
import complot.dev.quickipedia_backend.article.models.Article;
import complot.dev.quickipedia_backend.user.dtos.UserResponseDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class User {
    @Id
    private String email;
    @Column
    private String username;

    @Column
    @OneToMany
    private List<Article> bookmarks;

     public User(){}
    public User(String email, String username, List<Article> bookmarks) {
        this.email = email;
        this.username = username;
        this.bookmarks = bookmarks;
    }


    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<ArticleResponseDto> getBookmarks() {
        return bookmarks.stream().map(Article::convertToDto).toList();
    }
    public void setBookmarks(List<Article> favourites) {
        this.bookmarks = favourites;
    }

    public UserResponseDto convertToUserDto() {
        return new UserResponseDto(
                this.getEmail(),
                this.getUsername(),
                this.getBookmarks()
        );
    }
}