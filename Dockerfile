FROM node:18-alpine 
WORKDIR /app
COPY . .
CMD ["npm", "start"]