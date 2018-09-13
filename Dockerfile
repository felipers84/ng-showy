FROM node:8-alpine AS build
RUN npm install -g @angular/cli
RUN mkdir /app
COPY ./ /app
WORKDIR /app
RUN npm install
RUN ng build --prod

FROM nginx:1-alpine AS runtime
COPY --from=build /app/dist/ng-showy /usr/share/nginx/html
EXPOSE 80
