# Stage 1 — build React app
FROM node:18 AS build
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .
# Build the React app
RUN npm run build

# Stage 2 — serve with Nginx
FROM nginx:alpine
# Copy the build output from Stage 1
COPY --from=build /app/build /usr/share/nginx/html
# Copy custom Nginx config if you have one
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]