FROM node:12.18.1

RUN mkdir -p /app

WORKDIR /app

#context transfer
COPY . . 

RUN npm install

WORKDIR /app/Client

RUN npm install

RUN npm run-script build

EXPOSE 8080
EXPOSE 80

RUN useradd -m myuser
USER myuser

WORKDIR /app

ENV NODE_ENV=production

CMD [ "npm", "start" ]