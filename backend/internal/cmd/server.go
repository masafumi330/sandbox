package main

import (
	"database/sql"
	"fmt"
	"os"

	"sandbox/handler"
	"sandbox/repository"
	"sandbox/usecase"

	_ "github.com/go-sql-driver/mysql"
	"github.com/labstack/echo/v4"
)

func main() {
	db, err := initDB()
	if err != nil {
		panic(err)
	}
	defer db.Close()

	e := echo.New()

	taskRepo := repository.NewTaskRepository(db)
	taskUsecase := usecase.NewTaskUsecase(taskRepo)
	taskHandler := handler.NewTaskHandler(taskUsecase)

	handler.RegisterRoutes(e, taskHandler)

	e.Logger.Fatal(e.Start(":8000"))
}

func initDB() (*sql.DB, error) {
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", dbUser, dbPassword, dbHost, dbPort, dbName)
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return nil, err
	}

	return db, nil
}
