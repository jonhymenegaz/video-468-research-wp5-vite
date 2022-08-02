import { DataEntry } from "../interfaces/DataEntry";

class Project implements Project {
  public id: number;
  public date: Date;
  public title: string;
  public type: string; 
  public hours: number;
  
  constructor(entry: DataEntry){
    this.id = entry.id;
    this.date = new Date(entry.date);
    this.title = entry.project;
    this.type = entry.type;
    this.hours = entry.hours;
  }

  get dateInfo() {
    return this.date.toLocaleDateString() + ' ' + this.weekDay();
  }

  get hoursInfo() {
    return this.hours + ' hours';
  }

  private weekDay() {
    const day = this.date.getDay();
    switch (day) {
      case 0:
        return 'Sun';
        break;
      case 1:
        return 'Mon';
        break;
      case 2:
        return 'Tue';
        break;
      case 3:
        return 'Wed';
        break;
      case 4:
        return 'Thu';
        break;
      case 5:
        return 'Fri';
        break;
      case 6:
        return 'Sat';
        break;
    }
  }
}

export default Project;
