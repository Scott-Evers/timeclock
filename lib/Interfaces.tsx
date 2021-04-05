export interface Entry {
  ServiceNowStatus: string;
  TaskId: string;
  Offset: number;
  WeekStartsOn: Date;
  Hours: number;
  Comment?: string;
}

export interface Week {
  StartsOn: Date;
  Entries: Entry[];
}

export interface Task {
  TaskId: string;
  Description: string;
  Type: string;
  CommentRequired: boolean;
}

export interface TaskList {
  Tasks: Task[];
}
