# Flik landing Dockerfile

FROM node:8 as build-deps

# Create app directory
WORKDIR /usr/src/app

# Install our app's dependencies
COPY package*.json ./

RUN npm install

COPY . .

# Run webpack and build our app
RUN npm run build-prod

CMD [ "npm", "start"]
