# NodeJS REST API BoilerPlate

Node API Boilerplate can be used to start a new NodeJS PostgresSQL based backend REST API project. This is best suitable for small microservices as well as large scale monolith API

## Technologies Used
- [NodeJS >=12.16.3](https://nodejs.org/en/)
- [NPM >=6.14.4](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [PostgresSQL](https://www.postgresql.org/)
- [ElasticSearch](https://www.elastic.co/)
- [Sequelize ORM](https://sequelize.org/)

## Pre Requisite
- Install NodeJS. Recommended to use [NVM](https://github.com/nvm-sh/nvm)
- Install PostgresSQL for Backend DB 
- Install ElasticSearch (ELK) for Logging. The recommended way to do is using [docker](https://www.docker.com/products/docker-desktop). Follow these steps for installing on [local](https://logz.io/blog/elk-stack-on-docker/)

## Installation

Use the node package manager [npm](https://www.npmjs.com/) to install a boilerplate.

```bash
git clone git@github.com:darshitvvora/node-api-boilerplate.git
# Create .env and add config
cp sample.env .env
npm i
npm run migrate
npm start
```

## Usage

- Add resource and corresponding rest API using below steps
  - To create API, you will have to focus only on src/api folder
  - Make sure to use REST resource structure standards and add standard API
  - Add route in `index.js` of resource folder
  - Add model and properties as per backend table structure in `.model.js` and `.properties.js` (Use sample user resource for reference)
  - Add migration if its a new folder. Migration will use `.properties.js` file
  - Use the `.controller.js` to call logical function
  - Add pure logical function code in `.service.js`
  - Add fanout service in `.hookshot.js` file
  - Add common function model-specific function as class methods in `.model.js`
- Use the below steps to commit and push the code to your repo
  - Stage the files to be committed
  ```bash
    git add .
  ```
- Commit file, fix any errors reported, and add a proper commit message. Use `.gitmessage` file for commit message guidelines
  ```bash
    git commit
  ```
- Push file and create PR
  ```bash
    git push
  ```

## Roadmap
- [x] Folder structure
- [x] Express configuration
- [x] Postgres integration
- [x] Sequelize ORM integration
- [x] Sequelize Migration integration
- [x] Helmet and other security middleware integration
- [x] Code Quality and sanity workflow integration (editorconfig, eslint, prettier, husky, commitizen, buddy.js)
- [x] ELK logger component integration
- [x] Unit Testing integration (Chai + Mocha)
- [x] JSDoc integration
- [x] Docker integration

## Coding Guidelines
- [Variable Naming](https://github.com/kettanaito/naming-cheatsheet)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to write proper commit message and test before raising a PR

## References
- [Angular Fullstack](https://github.com/angular-fullstack/generator-angular-fullstack)
- [Sequelize ORM](https://sequelize.org/)
- [Node Webhooks](https://www.npmjs.com/package/node-webhooks)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [ESLint](https://www.npmjs.com/package/eslint-config-airbnb)
- [Git Commit guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
- [buddy.js](https://www.npmjs.com/package/buddy.js)
- [husky](https://www.npmjs.com/package/husky)
- [helmetjs](https://helmetjs.github.io/)
- [winston](https://www.npmjs.com/package/winston)
- [winston-elasticsearch](https://www.npmjs.com/package/winston-elasticsearch)
- [jsdoc] (https://jsdoc.app/)
- [BDD and TDD Approach] - (https://medium.com/quick-code/using-mocha-for-test-driven-development-in-building-api-with-node-express-c9331cd6171f)

## License
[MIT](https://choosealicense.com/licenses/mit/)
