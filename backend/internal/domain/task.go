package domain

import (
	"time"

	"github.com/pkg/errors"
)

type (
	TaskID int
	Task struct {
		ID TaskID
		Content string
		Date time.Time
	}
)

var ErrTaskContentEmpty = errors.New("task content is empty")

func NewTask(content string, date time.Time) (Task, error) {
	if content == "" {
		return Task{}, ErrTaskContentEmpty
	}
	return Task{
		Content: content,
		Date: date,
	}, nil
}