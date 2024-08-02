package repository

import (
	"database/sql"
	"time"

	"sandbox/domain"
)

type taskRepository struct {
	db *sql.DB
}

func NewTaskRepository(db *sql.DB) domain.TaskRepository {
	return &taskRepository{
		db: db,
	}
}

func (tr *taskRepository) FindSameTask(content string, date time.Time) (*domain.Task, error) {
	return nil, nil
}

func (tr *taskRepository) Save(task domain.Task) error {
	return nil
}
