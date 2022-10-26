
export enum Status {
  ToDo= "To Do",
  InProgess= "In Progress",
  UnderReview= "Under Review",
  Done= "Done"
}

export interface Issue{
  id:string;
  title: string;
  description:string;
  storyPoints:number;
  developer:string;
  status: Status;
}

