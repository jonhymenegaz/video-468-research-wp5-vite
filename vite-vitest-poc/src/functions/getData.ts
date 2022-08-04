import { DataEntry } from "../interfaces/DataEntry";

export const getData = async () => {
  const data = fetch(window.location + 'data/timesheet.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
  .then(response => response.json())
  .then((data): DataEntry[] => data);
  return data;
}
