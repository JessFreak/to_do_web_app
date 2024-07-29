FROM node:20
WORKDIR /app
COPY . .
RUN yarn install
RUN npx prisma db push
RUN npx prisma generate --schema ./back/prisma/schema.prisma

EXPOSE 4000
CMD ["node", "."]