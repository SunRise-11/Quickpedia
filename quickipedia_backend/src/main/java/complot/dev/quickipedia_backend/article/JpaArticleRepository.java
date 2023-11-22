package complot.dev.quickipedia_backend.article;

import complot.dev.quickipedia_backend.article.models.Article;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaArticleRepository extends CrudRepository<Article,String> {}