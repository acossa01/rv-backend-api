FROM node:14.17.0-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install

RUN npm i typescript@"<4.8"

COPY . ./

EXPOSE 8080

CMD [ "yarn", "start" ]
