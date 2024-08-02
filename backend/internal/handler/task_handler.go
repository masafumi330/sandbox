package handler

import (
	"net/http"
	"time"

	"sandbox/usecase"

	"github.com/labstack/echo/v4"
)

type taskHandler struct {
	taskUsecase usecase.TaskUsecase
}

func NewTaskHandler(taskUsecase usecase.TaskUsecase) *taskHandler {
	return &taskHandler{
		taskUsecase: taskUsecase,
	}
}

func RegisterRoutes(e *echo.Echo, handler *taskHandler) {
	e.POST("/tasks", handler.CreateTask)
}

func (h *taskHandler) CreateTask(c echo.Context) error {
	if err := h.taskUsecase.Create("content", time.Date(2021, 1, 1, 0, 0, 0, 0, time.UTC)); err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	return c.JSON(http.StatusOK, "task created")
}
