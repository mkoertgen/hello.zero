FROM node:alpine

# Install zero globally
ARG ZERO_VERSION=1.0.15
RUN apk add --update --no-cache python=2.7.15-r3 make=4.2.1-r2 g++=8.3.0-r0 &&\
    npm install -g --unsafe-perm=true zero@${ZERO_VERSION}

# Run zero in production mode
ENV NODE_ENV production

# Expose port
ENV PORT 80
EXPOSE 80

# Application directory
RUN mkdir -p /app
WORKDIR /app
# Note that ONBUILD may not really make sense since zero will re-yarn on any run.
# When deleting/recreating the container yarn will need to restore the packages again.
ONBUILD COPY . /app
# It's better to persist the yarn cache in the container by
# exposing as a volume, check path with `yarn cache dir`
VOLUME ["/usr/local/share/.cache/yarn/"]

# This works around parcel-bundler reporting '/bin/sh: lscpu: not found'
# as reported in https://github.com/parcel-bundler/parcel/issues/2031
ENV PARCEL_WORKERS 1

# TODO labeling, cf.
# - http://label-schema.org/rc1/
# - https://github.com/opencontainers/image-spec

CMD ["zero"]