package complot.dev.quickipedia_backend.article.dtos;

public record ArticleResponseDto(
        String question,
        String answer,
        String topic,
        int rank
) {
}