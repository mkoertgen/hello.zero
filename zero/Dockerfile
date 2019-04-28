FROM node:alpine

# Install zero globally
RUN apk add --update --no-cache python=2.7.15-r3 make
RUN npm install -g --unsafe-perm=true zero@1.0.13

# Run zero in production mode
ENV NODE_ENV production

# Expose port
ENV PORT 80
EXPOSE 80

ONBUILD COPY . /app
WORKDIR /app

CMD ["zero"]