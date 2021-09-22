
FROM node:latest

RUN mkdir -p /app
COPY . /app/

WORKDIR /app

RUN npm install

RUN npm install pm2 -g

EXPOSE 8889

CMD ["pm2-runtime", "ecosystem.config.js"]

# ENTRYPOINT ["npm", "run"]
# CMD ["start"]
