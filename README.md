# kaiburr

# Kaiburr Placement Tasks
---
### Task 1:
##### created an API with 4 endpoints:

1. GET `/api/servers/` 
    - Request: (RequestParam)
      - `String id` (optional)
      - `String name` (optional)
    - Workings:
        - if id is present then:
          - if a matching server is available then: returns the Server
          - else: throws HttpStatus.NOT_FOUND
        - if name is present then:
          - if a matching server or servers are available then: returns the List of Servers
          - else: throws HttpStatus NOT_FOUND
        - returns List of all the Servers
    - Response:
      - default i.e., no id and no name
        - `List<Server>` (returns all the server)
      - if id is present
        - `Server` when match is found
        - `HttpStatus.NOT_FOUND` when no match is found
      - if name is present
        - `List<Server>` when match is found
        - `HttpStatus.NOT_FOUND` when no match is found
2. GET `/api/servers/{id}` 
    - Request: (PathVariable)
      - `String id`
    - Workings:
        - returns the Server with matching id or null if no match found
    - Response:
      - `Server` if match is found
      - `null` if match not found
3. PUT `/api/servers/` 
    - Request: (RequestBody)
      - `Server server` i.e., a json object with
        - `String id` 
        - `String name`
        - `String language`
        - `String framework`
    - Workings:
        - saves the Server to the database
        - returns the Server
    - Response:
      - `Server`
4. DELETE `/api/servers/{id}` 
    - Request: (PathVariable)
      - `String id`
    - Workings:
        - deletes the Server from the database
    - Response:
      - `null` if match not found
---
### Task 2:
##### added swagger codegon to the above project:

1. added `springfox-swagger2`
    - gives auto genrated json of the available api at `/v2/api-docs`
2. added `springfox-swagger-ui`
    - gives auto genrated html file of the available api at `/swagger-ui.html`
---
### Task 4:
##### created a frontend for the above project:

1. showing or listing all servers is handled by 3 functions
    - `getAllServersBE()` in index.js is involved in fetching all servers from the backend
    - `createServerTile(server)` in server.js is involved in creating html code and injecting into the DOM
    - `init()` in server.js is the one which calls getAllServersBE and also calls createServerTile for each server returned
2. creating a new server is handled by 2 functions
    - `createServerBE(server)` in index.js is involved in sending the request to create the server to the backend
    - `handleCreateServer()` in server.js is involved in fetching the form data from the DOM and calling createServerBE.
3. deleting a specific server is handled by 2 functions
    - `deleteServerBE(id)` in index.js is involved in sending the request to delete the server to the backend
    - `handleDeleteServer()` in server.js just calls deleteServerBE with respective id.

_**Note:** `index.js` is used to set constants and contains all backend communication related functions. `server.js` is used to manage DOM and frontend related work._
