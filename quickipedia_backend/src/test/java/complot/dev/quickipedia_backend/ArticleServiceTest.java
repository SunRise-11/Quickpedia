package complot.dev.quickipedia_backend;

import complot.dev.quickipedia_backend.article.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ArticleServiceTest {

    @Autowired
    ArticleService articleService;

   /* @Test
    void shouldReturnAllArticles(){

        // Arrange
        List<Article> articles;
        //Act
        articles = articleService.getAllArticles();
        //Assert
        assertEquals(1, articles.size());
    }

    @Test
    void shouldReturnTopicArticles(){

        // Arrange
        List<Article> articles;
        //Act
        articles = articleService.getArticlesByTopic("controversial");
        //Assert
        assertEquals(articles.get(0).getTopic(), "controversial");
    }

    @Test
    void shouldAddArticle(){

        // Arrange
        AddArticleDto articleDto =
                new AddArticleDto("Controversial", "Is the sky blue?");
        //Act
        articleService.addArticle(articleDto);
        List<Article> articles = articleService.getAllArticles();
        //Assert
        assertEquals(articleDto.question(), articles.get(articles.size() - 1).getQuestion());
    }*/

}