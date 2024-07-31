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

// まずはTaskエンティティに重複確認の振る舞いを追加してみる
func (t *Task) Exists(otherTask Task) bool {
	return false
}

type TaskRepository interface {

}