FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN node ./commands/queries/baseQuery.js

CMD [ "node", "index.js" ]