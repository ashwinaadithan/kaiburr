package engineer.ashwinaadithan.kaiburrT1.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("server")
public class Server {
    @Id
    private String id;
    private String name;
    private String language;
    private String framework;
}
