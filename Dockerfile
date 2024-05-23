FROM node:18.3.0-alpine3.15

# Create app directory

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source

COPY . .

# Build the app
RUN npm run build

EXPOSE 4001

CMD ["npm", "run", "start"]