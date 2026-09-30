FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --include=optional
RUN npm install @rollup/rollup-linux-x64-musl --save-dev

COPY . .

RUN npm run build


FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]