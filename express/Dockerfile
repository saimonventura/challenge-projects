
FROM node:18-alpine as base

WORKDIR /express

COPY . .

COPY .env  .env

RUN npm install 

CMD ["npm", "run", "dev"]