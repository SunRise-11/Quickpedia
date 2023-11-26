package complot.dev.quickipedia_backend.article.dtos;

public record ArticleResponseDto(
        String id,
        String question,
        String answer,
        String topic,
        int rank
) {
}