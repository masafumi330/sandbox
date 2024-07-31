package domain

// TaskService is a domain service for task.
// domain service does not have properties. just methods.
type TaskService struct {}

func NewTaskService() TaskService {
	return TaskService{}
}

func (ts *TaskService) Exists(task Task) bool {
	return false
}