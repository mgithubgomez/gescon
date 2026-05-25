FROM node:20

WORKDIR /usr/app_aaee_ef

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]