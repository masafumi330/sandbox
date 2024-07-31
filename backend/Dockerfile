FROM golang:1.21

WORKDIR /

COPY . .

WORKDIR /internal

RUN apt update && apt install -y default-mysql-server

RUN go mod tidy
RUN go build -o main ./cmd/server.go

ENTRYPOINT ["./main"]

EXPOSE 8000
