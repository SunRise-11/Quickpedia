package complot.dev.quickipedia_backend.user.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import complot.dev.quickipedia_backend.article.dtos.ArticleResponseDto;
import complot.dev.quickipedia_backend.article.models.Article;
import complot.dev.quickipedia_backend.user.dtos.UserResponseDto;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class QuickipediaUser {
    @Id
    private String email;
    @Column
    private String user_name;

    @Column
    @JsonIgnore
    @OneToMany(mappedBy = "quickipediaUser", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Article> bookmarks;

     public QuickipediaUser(){}
    public QuickipediaUser(String email, String username, List<Article> bookmarks) {
        this.email = email;
        this.user_name = username;
        this.bookmarks = bookmarks;
    }


    public String getEmail() {
        return email;
    }

    public String getUserName() {
        return user_name;
    }

    public void setUserName(String username) {
        this.user_name = username;
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
                this.getUserName());}
}