package engineer.ashwinaadithan.kaiburrT1.repo;

import engineer.ashwinaadithan.kaiburrT1.model.Server;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ServerRepo extends MongoRepository<Server, String> {
    Optional<Server> findByName(String name);
}
