import {Task, TaskList, Entry} from './Interfaces';

export function getAllTasks(): TaskList {
  let tasks: TaskList = {Tasks: []};
  for (let i = 0; i < 20; i++) {
    let task: Task = {
      TaskId: 'PRJ000' + i.toString(),
      Description: 'Project task ' + i.toString(),
      CommentRequired: false,
      Type: 'Project',
    };
    tasks.Tasks.push(task);
  }
  return tasks;
}

export function getTimecardForWeek(wkStart: Date): Entry[] {
  let r: Entry[] = [];
  for (let i = 0; i < 5; i++) {
    let e: Entry = {
      ServiceNowStatus: 'draft',
      TaskId: 'PRJ000' + i.toString(),
      WeekStartsOn: wkStart,
      Hours: 2,
      Offset: i,
    };
    r.push(e);
  }
  return r;
}
