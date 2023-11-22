package complot.dev.quickipedia_backend.user.models;

import complot.dev.quickipedia_backend.article.models.Article;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class User {
    @Id
    private Long id; //check if we store the token here
    @Column
    private String username;

    @Column
    @OneToMany //finish this, the user can have multiple liked articles
    private List<Article> favourites;

     public User(){}
    public User(Long id, String username, List<Article> favourites) {
        this.id = id;
        this.username = username;
        this.favourites = favourites;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Article> getFavourites() {
        return favourites;
    }

    public void setFavourites(List<Article> favourites) {
        this.favourites = favourites;
    }
}