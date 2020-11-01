FROM node:12.16.1
LABEL maintainer="Amaro Duarte" \
      description="Aizon Test"

COPY . /var/app

WORKDIR /var/app

ENV TZ=Europe/Barcelona

RUN npm install

CMD ["npm","start"]