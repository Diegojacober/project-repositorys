FROM node:alpine 

WORKDIR /app 

COPY package.json . 

RUN apk add --no-cache 

COPY . . 

RUN npm install

EXPOSE 3000 

RUN npm start
