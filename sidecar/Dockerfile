FROM envoyproxy/envoy:latest

COPY envoy.yaml.tmpl /tmpl/envoy.yaml.tmpl
COPY docker-entrypoint.sh /

RUN chmod 500 /docker-entrypoint.sh

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install gettext -y

ENV LISTEN_PORT=90 SERVICE_ADDRESS=service SERVICE_PORT=9090

ENTRYPOINT ["/docker-entrypoint.sh"]