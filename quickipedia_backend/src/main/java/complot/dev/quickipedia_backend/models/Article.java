package complot.dev.quickipedia_backend.models;

import jakarta.persistence.*;

@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String articleId;

    @Column
    private String topic;
    @Column
    private String question;

    public Article(){}
    private Article(String topic, String question) {
        this.topic = topic;
        this.question = question;
    }

    public String getArticleId() {
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
}
