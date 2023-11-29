package complot.dev.quickipedia_backend.article.models;

import complot.dev.quickipedia_backend.article.dtos.ArticleResponseDto;
import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class Article {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String articleId;
    @Column
    private String topic;
    @Column
    private String question;
    @Column(length = 65535)
    private String answer;
    @Column
    private String source;
    @Column(unique = true)
    private int rank;

    public Article() {
    }

    private Article(String articleId, String topic, String question) {
        this.articleId = articleId;
        this.topic = topic;
        this.question = question;
        this.answer = answer;
    }

    public String getAnswer() {
        return answer;
    }

    public int getRank() {
        return rank;
    }

    public String getId() {
        return articleId;
    }

    public String getTopic() {
        return topic;
    }

    public String getQuestion() {
        return question;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getSource() {
        return source;
    }

    public ArticleResponseDto convertToDto() {
        return new ArticleResponseDto(
                this.getId(),
                this.getQuestion(),
                this.getAnswer(),
                this.getTopic(),
                this.getSource(),
                this.getRank()
        );
    }
}