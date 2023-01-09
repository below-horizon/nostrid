FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --omit-dev
CMD ["node", "index.js"]
EXPOSE 3001