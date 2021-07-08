FROM nginx

EXPOSE 80

RUN rm /usr/share/nginx/html/*

COPY conf/default.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx","-g","daemon off;" ]