package usecase

import (
	"errors"
	"sandbox/domain"
	"time"
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

var (
	ErrTaskAlreadyExists = errors.New("task already exists")
)

func (tu *taskUsecase) Create(content string, date time.Time) error {
	task, err := domain.NewTask(content, date)
	if err != nil {
		return err
	}

	taskService := domain.NewTaskService()

	// TODO: 同じ内容&同じ日付のタスクの重複チェック
	if taskService.Exists(task) {
		return ErrTaskAlreadyExists
	}
	// TODO: repositoryに永続化依頼


	return nil
}

