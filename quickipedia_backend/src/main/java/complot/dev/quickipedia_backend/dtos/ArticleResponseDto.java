package complot.dev.quickipedia_backend.dtos;

public record ArticleResponseDto(
        String question,
        String answer,
        String topic,
        int rank
) {
}
