package complot.dev.quickipedia_backend.user;

import complot.dev.quickipedia_backend.user.dtos.AddUserDto;
import complot.dev.quickipedia_backend.user.dtos.UserResponseDto;
import complot.dev.quickipedia_backend.user.models.QuickipediaUser;
import org.springframework.stereotype.Service;



@Service
public class UserService {
    private final JpaUserRepository repo;

    public UserService(JpaUserRepository repo) {
        this.repo = repo;
    }

    public QuickipediaUser findUserByEmail(String email) {
        return repo.findById(email).orElseThrow();
    }

   public QuickipediaUser addUser(AddUserDto userToAdd){
        return repo.save(
                new QuickipediaUser(
                        userToAdd.email(),
                        userToAdd.username()
                )
        );
   }
    public UserResponseDto getBookmarksByEmail(String email) {
        return repo.findById(email).orElseThrow().convertToUserDto();
    }

}