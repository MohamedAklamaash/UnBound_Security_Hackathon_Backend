
A swagger docx is created for all the created, to access this {backend_url}/api

**MileStone 1:**
    -> Added user authentication
    -> done list all models and also added a route a add a new model (only admins can add new model)
    -> Only users who are logged in can access these routes (with a access token in the Header)
    -> Authorization is done using JWT
    -> Swagger docs can be found in {base_url}/api

**MileStone 2:**
    -> Only users Only users who are logged can chat
    -> Generated Static responses for multiple models

**MileStone 3:**
    -> Implemented regex-based routing to dynamically redirect prompts based on predefined rules stored in PostgreSQL.  
    -> Added a route to create, list, and retrieve routing policies, ensuring requests are rerouted when matching a regex pattern.  
    -> Fixed regex handling by applying the case-insensitive flag correctly in NestJS to prevent invalid pattern errors.

**MileStone 4**
    -> Created a frontend web chat with user signin and signup

**MileStone 5**
    -> Enhanced the frontend app with a new admin page to perform CRUD operations on routing policy

**MileStone 6**
    -> Updated the backend and the frontend to support pdf upload functionality

**MileStone 7**
    ->introduced a dynamic routing system for file uploads, where uploaded files are processed by different AI models based on admin-configurable routing policies.
