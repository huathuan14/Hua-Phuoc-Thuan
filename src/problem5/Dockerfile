# Use the official Node.js image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code into the container
COPY . .

#RUN rm ./.env
COPY ./.env.docker ./.env

RUN touch .env

# Expose port 3000 for the application
EXPOSE 3000

# Run the application
CMD ["npm", "run", "dev"]
