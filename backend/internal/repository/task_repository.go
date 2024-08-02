package repository

import (
	"sandbox/domain"
	"time"
)

type taskRepository struct {}

func NewTaskRepository() domain.TaskRepository {
	return &taskRepository{}
}

func (tr *taskRepository) FindSameTask(content string, date time.Time) (*domain.Task, error) {
	return nil, nil
}

func (tr *taskRepository) Save(task domain.Task) error {
	return nil
}