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
        ![image](https://user-images.githubusercontent.com/55663283/163144140-08f3be0c-e6b3-4ae0-9f39-0d945b41c810.png)
      - if id is present
        - `Server` when match is found
        ![image](https://user-images.githubusercontent.com/55663283/163144384-538bb4ab-5e16-472e-8ef9-78f3a75b8918.png)
        - `HttpStatus.NOT_FOUND` when no match is found
        ![image](https://user-images.githubusercontent.com/55663283/163144488-17b4a4d6-085c-4147-a4c4-7340839044a3.png)
      - if name is present
        - `List<Server>` when match is found
        ![image](https://user-images.githubusercontent.com/55663283/163144893-d49ac16e-91c2-490d-aeb6-e63ceebd12bf.png)
        - `HttpStatus.NOT_FOUND` when no match is found
        ![image](https://user-images.githubusercontent.com/55663283/163144690-ab731bc6-8736-4b8a-977c-7ed77aa36185.png)
2. GET `/api/servers/{id}` 
    - Request: (PathVariable)
      - `String id`
    - Workings:
        - returns the Server with matching id or null if no match found
    - Response:
      - `Server` if match is found
      ![image](https://user-images.githubusercontent.com/55663283/163145265-94057d20-9f71-4004-baf2-6b428d4684e0.png)
      - `HttpStatus.NOT_FOUND` when no match is found
      ![image](https://user-images.githubusercontent.com/55663283/163145386-05e731b8-936e-4e16-890d-fd5e4fac28a6.png)
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
      ![image](https://user-images.githubusercontent.com/55663283/163145748-cbd58326-b6e2-42bd-8b83-16bfa9b121c6.png)
4. DELETE `/api/servers/{id}` 
    - Request: (PathVariable)
      - `String id`
    - Workings:
        - deletes the Server from the database
    - Response:
      - `No Response`
      ![image](https://user-images.githubusercontent.com/55663283/163146006-14ece2fd-c26f-4c52-bedf-0230c5396df3.png)
---
### Task 2:
##### added swagger codegon to the above project:

1. added `springfox-swagger2`
    - gives auto genrated json of the available api at `/v2/api-docs`
    ![image](https://user-images.githubusercontent.com/55663283/163143561-9a707ef8-fd33-4872-9df9-35f9e1df7188.png)
2. added `springfox-swagger-ui`
    - gives auto genrated html file of the available api at `/swagger-ui.html`
    ![image](https://user-images.githubusercontent.com/55663283/163143905-600241a4-aa9e-4d83-ad55-903cda800266.png)
---
### Task 4:
##### created a frontend for the above project:

1. showing or listing all servers is handled by 3 functions
    - `getAllServersBE()` in index.js is involved in fetching all servers from the backend
    - `createServerTile(server)` in server.js is involved in creating html code and injecting into the DOM
    - `init()` in server.js is the one which calls getAllServersBE and also calls createServerTile for each server returned
    ![image](https://user-images.githubusercontent.com/55663283/163142253-1f54411b-c36b-4f23-956d-6c42806b63d6.png)
2. creating a new server is handled by 2 functions
    - `createServerBE(server)` in index.js is involved in sending the request to create the server to the backend
    - `handleCreateServer()` in server.js is involved in fetching the form data from the DOM and calling createServerBE.
    ![image](https://user-images.githubusercontent.com/55663283/163142354-acace6d0-27b5-42f8-a028-ba38e4511250.png)
3. deleting a specific server is handled by 2 functions
    - `deleteServerBE(id)` in index.js is involved in sending the request to delete the server to the backend
    - `handleDeleteServer()` in server.js just calls deleteServerBE with respective id.
    ![image](https://user-images.githubusercontent.com/55663283/163142652-08c7f1ca-f63b-406c-8e34-5766a14e4f57.png)
   
_**Note:** `index.js` is used to set constants and contains all backend communication related functions. `server.js` is used to manage DOM and frontend related work._
