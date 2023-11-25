package complot.dev.quickipedia_backend.user;

import complot.dev.quickipedia_backend.user.models.QuickipediaUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaUserRepository extends CrudRepository<QuickipediaUser,String> { }