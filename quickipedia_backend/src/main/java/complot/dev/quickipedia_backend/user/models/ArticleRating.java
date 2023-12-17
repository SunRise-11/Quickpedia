package complot.dev.quickipedia_backend.user.models;

import complot.dev.quickipedia_backend.article.models.Article;
import jakarta.persistence.*;

@Entity
public class ArticleRating {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @ManyToOne
    Article article;

    @ManyToOne
    QuickipediaUser quickipediaUser;

    @Column
    boolean rating;

    public ArticleRating(Article article, QuickipediaUser quickipediaUser, boolean rating) {
        this.article = article;
        this.quickipediaUser = quickipediaUser;
        this.rating = rating;
    }

    public ArticleRating() {}
}
