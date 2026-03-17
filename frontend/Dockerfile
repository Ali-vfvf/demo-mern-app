# FROM nginx:alpine
# COPY public/ /usr/share/nginx/html
# COPY src/ /usr/share/nginx/html/src
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
# Stage: Frontend - serve static files with Nginx
FROM nginx:alpine

# Copy the built public folder (HTML, JS, CSS)
COPY public/ /usr/share/nginx/html

# Copy custom nginx configuration with API proxy
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]