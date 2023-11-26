package complot.dev.quickipedia_backend.user.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import complot.dev.quickipedia_backend.article.dtos.ArticleResponseDto;
import complot.dev.quickipedia_backend.article.models.Article;
import complot.dev.quickipedia_backend.user.dtos.UserResponseDto;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class QuickipediaUser {
    @Id
    private String email;
    @Column
    private String user_name;


    @JsonIgnore
    @OneToMany(mappedBy = "quickipediaUser", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<BookmarkedArticle> bookmarks;

    public QuickipediaUser() {
    }

    public QuickipediaUser(String email, String username, List<BookmarkedArticle> bookmarks) {
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

    public List<ArticleResponseDto> getAllBookmarks() {
        return bookmarks.stream().map(article ->
                article.article.convertToDto()).toList();
    }

    public List<ArticleResponseDto> getBookmark(String id) {
        return bookmarks.stream()
                .filter(article -> article.getId().equals(id))
                .map(article ->
                article.article.convertToDto()).toList();
    }

    public void addBookmark(Article articleToBookmark) {
        this.bookmarks.add(
                new BookmarkedArticle(
                        articleToBookmark,
                        this
                )
        );
    }

    public UserResponseDto convertToUserDto() {
        return new UserResponseDto(
                this.getEmail(),
                this.getUserName(),
                bookmarks.stream()
                        .map(
                                item -> item.article.convertToDto())
                        .toList()
        );
    }
}