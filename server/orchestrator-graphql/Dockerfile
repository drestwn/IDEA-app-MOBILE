# based image yang akan digunakan
FROM node:16.13

# path di container dimana berisi codingan kita (path bebas sesuai kesepakatan bersama)
WORKDIR /server/orchestrator-graphql

# untuk set ENV dalam aplikasi kita
ENV PORT=4000
ENV NODE_ENV=production
ENV BASE_URL_USERS=http://localhost:4001
ENV BASE_URL_APP=http://localhost:4002
ENV BASE_PORT_REDIS=11665
ENV BASE_URL_REDIS=redis://default:btVC3RtZ7OXzqqYgYlv2bHAzinBxT40N@redis-11665.c285.us-west-2-2.ec2.cloud.redislabs.com:11665

# copy deps yang ada di apps ke WORKDIR
COPY package.json package-lock.json /server/orchestrator-graphql/

# Install npm & Mengapus cache
RUN npm install && npm cache clean --force

# 2 install setup for development
RUN npm install -g nodemon

# copy semua file & folder ke WORKDIR
COPY ./ ./

# execute apps: production
CMD ["npm", "run", "dev"]