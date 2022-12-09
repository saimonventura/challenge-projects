FROM node:16-alpine as base

WORKDIR /frontend

COPY package.json ./

RUN npm install 

COPY . .

CMD ["npm", "run", "dev"]