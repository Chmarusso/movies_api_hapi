# Project setup

- clone / fork that repo
- navigate to that project in your system
- install dependencies `npm install`
- create empty file `db/database_development.sqlite`
- run migrations `node node_modules/.bin/sequelize db:migrate`
- run seed `npx sequelize-cli db:seed:all`
- start server `npm start`
