import {TaskList, Task, Week, Entry} from './Interfaces';
import {getAllTasks, getTimecardForWeek} from './snow_mock';

export function DefaultTasks() {
  let allTasks = getAllTasks();
  let someTasks: TaskList = {Tasks: []};
  for (let i = 0; i < allTasks.Tasks.length; i++) {
    if (i % 2 === 0) {
      someTasks.Tasks.push(allTasks.Tasks[i]);
    }
  }
  return someTasks;
}

export class TimeCard {
  constructor(wkStart: Date) {
    this.StartsOn = wkStart;
    this.Entries = getTimecardForWeek(wkStart);
    //todo grab current time card from service now and local storage and merge
  }

  StartsOn: Date;
  Entries: Entry[];

  getLineItemTotal = (taskNumber: string): number => {
    //todo jmespath find all entries with that task number and total them
    console.log(taskNumber);
    return 0;
  };
}

export class Tasks {
  constructor() {
    let tl: TaskList = getAllTasks();
    this.List = tl.Tasks;
  }
  List: Task[];

  getTaskById = (Id: string): Task => {
    return this.List[0];
  };
}
