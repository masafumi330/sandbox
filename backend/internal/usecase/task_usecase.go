package usecase

import (
	"errors"
	"time"

	"sandbox/domain"
)

// TaskUsecase represent the task's usecases.
type TaskUsecase interface {
	Create(content string, date time.Time) error
}

func NewTaskUsecase(
	taskRepo domain.TaskRepository,
) TaskUsecase {
	return &taskUsecase{
		taskRepo: taskRepo,
	}
}

type taskUsecase struct {
	taskRepo domain.TaskRepository
}

// Ensure taskUsecase implement TaskUsecase.
var _ TaskUsecase = (*taskUsecase)(nil)

var ErrTaskAlreadyExists = errors.New("task already exists")

func (tu *taskUsecase) Create(content string, date time.Time) error {
	task, err := domain.NewTask(content, date)
	if err != nil {
		return err
	}

	taskService := domain.NewTaskService(tu.taskRepo)
	isExist, err := taskService.Exists(task)
	if err != nil {
		return err
	}
	if isExist {
		return ErrTaskAlreadyExists
	}

	if err := tu.taskRepo.Save(task); err != nil {
		return err
	}

	return nil
}
