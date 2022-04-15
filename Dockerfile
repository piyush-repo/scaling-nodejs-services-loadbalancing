FROM node:17-alpine3.14
USER root
RUN mkdir /home/app
WORKDIR /home/app
COPY --chown=node:node package.json ./
RUN npm install
COPY --chown=node:node . .

CMD ["node", "src/index.js"]