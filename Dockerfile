# pull the official base image
FROM node:15.13-alpine as build
# set working direction
WORKDIR /timber-wolf
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD ["npm", "run", "start"]