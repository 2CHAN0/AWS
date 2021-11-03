FROM nginx:1.20.1
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 18080
CMD service nginx start