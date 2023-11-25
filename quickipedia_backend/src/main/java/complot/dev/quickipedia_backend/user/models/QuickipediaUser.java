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
public class QuickipediaUser {
    @Id
    private String email;
    @Column
    private String user_name;

    /*@Column
    @OneToMany
    private List<Article> bookmarks;*/

     public QuickipediaUser(){}
    public QuickipediaUser(String email, String username, List<Article> bookmarks) {
        this.email = email;
        this.user_name = username;
        //this.bookmarks = bookmarks;
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
/*
    public List<ArticleResponseDto> getBookmarks() {
        return bookmarks.stream().map(Article::convertToDto).toList();
    }
    public void setBookmarks(List<Article> favourites) {
        this.bookmarks = favourites;
    }*/

    public UserResponseDto convertToUserDto() {
        return new UserResponseDto(
                this.getEmail(),
                this.getUserName());}
}