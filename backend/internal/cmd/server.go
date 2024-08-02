package main

import (
	"sandbox/handler"
	"sandbox/repository"
	"sandbox/usecase"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	taskRepo := repository.NewTaskRepository()
	taskUsecase := usecase.NewTaskUsecase(taskRepo)
	taskHandler := handler.NewTaskHandler(taskUsecase)

	handler.RegisterRoutes(e, taskHandler)

	e.Logger.Fatal(e.Start(":8000"))
}