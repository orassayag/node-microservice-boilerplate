FROM 056612754658.dkr.ecr.us-east-1.amazonaws.com/nginxnode-microservice-boilerplate:latest
RUN apt-get update -y && \
    apt-get install -y curl \
                       telnet \
                       traceroute \
                       net-tools \
                       libcurl3 \
                       libcurl3-dev \
                       ngrep \
                       gnupg \
                       iputils-ping \
                       apt-utils

RUN curl -sL https://deb.nodesource.com/setup_16.x |   bash -

RUN apt-get update -y && \
    apt-get install -y nodejs \
                       build-essential

RUN mkdir /var/log/nginx/nginxnodejs

# seperate step instll
COPY package.json /opt/node-microservice-boilerplate/package.json
RUN cd /opt/node-microservice-boilerplate && npm install

# seperate step build
COPY dist /opt/node-microservice-boilerplate/dist
COPY version.txt /opt/node-microservice-boilerplate

# step run build
WORKDIR /opt/node-microservice-boilerplate

EXPOSE 8080
CMD ["npm", "start"]
