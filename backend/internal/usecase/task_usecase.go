package usecase

import (
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

func (tu *taskUsecase) Create(content string, date time.Time) error {
	_, err := domain.NewTask(content, date)
	if err != nil {
		return err
	}

	// TODO: 同じ内容&同じ日付のタスクの重複チェック
	// TODO: repositoryに永続化依頼


	return nil
}

