package complot.dev.quickipedia_backend;

import complot.dev.quickipedia_backend.dtos.AddArticleDto;
import complot.dev.quickipedia_backend.models.Article;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {
    private JpaArticleRepository articleRepo;
    public ArticleService(JpaArticleRepository articleRepo) {
        this.articleRepo = articleRepo;
    }

    public List<Article> getAllArticles() {
        return null;
    }

    public List<Article> getArticlesByTopic(String topic) {
        return null;
    }

    public Article addArticle(AddArticleDto articleDto){
        return null;
    }
}