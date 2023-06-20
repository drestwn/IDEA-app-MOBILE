# based image yang akan digunakan
FROM node:16.13

# path di container dimana berisi codingan kita (path bebas sesuai kesepakatan bersama)
WORKDIR /server/services/users

# untuk set ENV dalam aplikasi kita
ENV PASSWORD_MONGODB=MongoDB

# copy deps yang ada di apps ke WORKDIR
COPY package.json package-lock.json /server/services/users/

# Install npm & Mengapus cache
RUN npm install && npm cache clean --force

# 2 install setup for development
RUN npm install -g nodemon

# copy semua file & folder ke WORKDIR
COPY ./ ./

# execute apps: production
CMD ["npm", "run", "dev"]