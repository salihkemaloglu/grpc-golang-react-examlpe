
FROM node:10.15.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install 
RUN npm install react-scripts@1.1.1 -g 
RUN npm audit fix

COPY . /usr/src/app

RUN npm run build

CMD ["npm", "start"]