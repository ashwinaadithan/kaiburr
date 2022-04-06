package engineer.ashwinaadithan.kaiburrT1.controller;

import engineer.ashwinaadithan.kaiburrT1.model.Server;
import engineer.ashwinaadithan.kaiburrT1.repo.ServerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@RestController
public class ServerController {
    @Autowired
    private ServerRepo repo;

    @GetMapping("/")
    public Object getAllServers(@RequestParam("id") Optional<String> id, @RequestParam("name") Optional<String> name) {
        if(id.isPresent()) {
            Optional<Server> server = repo.findById(id.get());
            if(server.isPresent()) return server.get();
            else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "server with id " + id.get() + " not found");
        }

        if(name.isPresent()) {
            Optional<Server> server = repo.findByName(name.get());
            if(server.isPresent()) return server.get();
            else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "server with name " + name.get() + " not found");
        }

        return repo.findAll();
    }

    @PutMapping("/")
    public Server createServer(@RequestBody Server server) {
        return repo.save(server);
    }

    @DeleteMapping("/")
    public void deleteServer(@RequestParam("id") Optional<String> id) {
        if(id.isEmpty()) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "id cannot be empty");
        repo.deleteById(id.get());
    }
}
