package domain

import (
	"reflect"
	"testing"
	"time"
)

func TestNewTask(t *testing.T) {
	type args struct {
		content string
		date    time.Time
	}
	tests := []struct {
		name    string
		args    args
		want    Task
		wantErr bool
	}{
		{
			name: "タスク内容が空文字はNG.",
			args: args{
				content: "",
				date:    time.Now(),
			},
			want:    Task{},
			wantErr: true,	
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := NewTask(tt.args.content, tt.args.date)
			if (err != nil) != tt.wantErr {
				t.Errorf("NewTask() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("NewTask() = %v, want %v", got, tt.want)
			}
		})
	}
}
