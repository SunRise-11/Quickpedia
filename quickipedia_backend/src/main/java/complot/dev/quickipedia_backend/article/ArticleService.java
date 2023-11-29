package complot.dev.quickipedia_backend.article;

import complot.dev.quickipedia_backend.article.dtos.*;
import complot.dev.quickipedia_backend.article.models.Article;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {
    private final JpaArticleRepository articleRepo;
    public ArticleService(JpaArticleRepository articleRepo) {
        this.articleRepo = articleRepo;
    }

    public List<ArticleResponseDto> getAllArticles() {

        ArticleResponseDto responseDto;
        var articles = (List<Article>) articleRepo.findAll();

        return articles.stream().map(
                Article::convertToDto
        ).toList();
    }
}