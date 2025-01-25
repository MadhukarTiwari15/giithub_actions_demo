# Stage 1: Build the React app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . ./

# Build the React app for production
RUN npm run build

# Stage 2: Serve the React app using NGINX
FROM nginx:alpine

# Copy build files to NGINX directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default NGINX port
EXPOSE 80

# Start NGINX to serve the app
CMD ["nginx", "-g", "daemon off;"]
