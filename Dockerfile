FROM node:16-alpine as builder

WORKDIR /frontend

COPY package*.json ./

RUN npm install || true

COPY . .

EXPOSE 3000

CMD npm run dev