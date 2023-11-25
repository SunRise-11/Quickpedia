package complot.dev.quickipedia_backend.user.dtos;

import complot.dev.quickipedia_backend.article.dtos.ArticleResponseDto;

import java.util.List;

public record UserResponseDto(
        String email,
        String username
        //List<ArticleResponseDto> bookmarks
) {
}