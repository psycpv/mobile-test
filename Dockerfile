FROM node:16

RUN mkdir /vibe-v2
WORKDIR /vibe-v2
COPY . ./

RUN yarn install

COPY .env.example .env

EXPOSE 3000

CMD ["yarn" , "dev"]
