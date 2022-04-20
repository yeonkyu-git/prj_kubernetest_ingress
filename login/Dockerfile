FROM node:16.14
LABEL name="yeonkyu" email="dusrbpoiiij@naver.com"
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000 80
CMD ["node", "app.js"]