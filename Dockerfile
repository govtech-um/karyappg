# Base image: Apache HTTP Server
FROM httpd:2.4-alpine

# Set the working directory for the container
WORKDIR /usr/local/apache2/htdocs/

# Copy the pre-built Next.js static files to the web server's document root
COPY out/ .

# Expose the default HTTP port
EXPOSE 80

# Start Apache in the foreground
CMD ["httpd-foreground"]
