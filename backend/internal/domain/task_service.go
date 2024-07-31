package domain

// TaskService is a domain service for task.
// domain service does not have properties. just methods.
type TaskService struct {
	taskRepo TaskRepository
}

func NewTaskService(
	taskRepo TaskRepository,
) TaskService {
	return TaskService{
		taskRepo: taskRepo,
	}
}

func (ts *TaskService) Exists(task Task) (bool, error) {
	otherTask, err := ts.taskRepo.FindSameTask(task.Content, task.Date)
	if err != nil {
		return false, err
	}
	if otherTask != nil {
		return true, nil
	}
	return false, nil
}