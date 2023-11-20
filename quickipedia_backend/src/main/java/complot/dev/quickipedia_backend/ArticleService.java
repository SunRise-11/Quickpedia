package complot.dev.quickipedia_backend;

import org.springframework.stereotype.Service;

@Service
public class ArticleService {
    private JpaArticleRepository articleRepo;
    public ArticleService(JpaArticleRepository articleRepo) {
        this.articleRepo = articleRepo;
    }
}