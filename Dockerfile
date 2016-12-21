FROM node:6

COPY . /builtright

EXPOSE 3000

ENV DATABASE_URL postgresql://postgres@localhost:5432

WORKDIR /builtright

RUN npm install -g nodal && \
  nodal db:create && \
  nodal db:prepare && \
  nodal db:migrate

CMD nodal s
