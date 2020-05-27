# node-api-boilerplate
NodeJS Rest API - Express/ Sequelize (Postgres) /WinstonLogger ElasticSearchLogging/ Security Hardened


## Steps to start the project
```sh
- git clone git@github.com:darshitvvora/node-api-boilerplate.git
- Create .env and add config
  - cp sample.env .env
- npm i
- npm run migrate
- npm start
```

## Steps to commit and push code
- Make changes as require
  - To create API, you will have to focus only on src/api folder
  - Make sure to use REST resource structure standards and add standard API
  - Add route in index of resource folder
  - Add model and properties as per backend structure
  - Add migration if its a new folder. Migration will use properties file
  - Add Pure function controller
  - Add logical code in service
  - Add fanout service in hookshot file
  - Add common function model specific function as class methods

- Stage the file
  ```sh
    git add .
  ```
- Commit file
  ```sh
    git commit
  ```
- Push file and create PR
  ```sh
    git push
  ```
