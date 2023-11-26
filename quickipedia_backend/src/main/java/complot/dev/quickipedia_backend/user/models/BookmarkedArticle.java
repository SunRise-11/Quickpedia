package complot.dev.quickipedia_backend.user.models;


import complot.dev.quickipedia_backend.article.models.Article;
import jakarta.persistence.*;

@Entity
public class BookmarkedArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @ManyToOne
    Article article;

    @ManyToOne
    QuickipediaUser quickipediaUser;

    public BookmarkedArticle(String id, Article article, QuickipediaUser quickipediaUser) {
        this.id = id;
        this.article = article;
        this.quickipediaUser = quickipediaUser;
    }

    public BookmarkedArticle() {

    }

    public String getId() {
        return id;
    }

    public Article getBookmark() {
        return article;
    }

    public void setBookmark(Article bookmark) {
        this.article = bookmark;
    }

    public QuickipediaUser getQuickipediaUser() {
        return quickipediaUser;
    }

    public void setQuickipediaUser(QuickipediaUser quickipediaUser) {
        this.quickipediaUser = quickipediaUser;
    }
}