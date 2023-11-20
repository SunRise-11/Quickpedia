package complot.dev.quickipedia_backend;

import complot.dev.quickipedia_backend.models.Article;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaArticleRepository extends CrudRepository<Article,String> {}