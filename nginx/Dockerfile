FROM nginx

EXPOSE 80

RUN rm /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/default.conf
RUN echo cat /etc/nginx/conf.d/default.conf
ARG CACHEBUST=1
COPY conf/default.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx","-g","daemon off;" ]