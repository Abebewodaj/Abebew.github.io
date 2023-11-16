//Write a function, flatten, that returns an array that has objects of the form {date: "...", id: 1, amt: 15} for all donations.
/*flatten(dailyRecord) returns: [
{ date: '01/10/2022', id: 1, amount: 100 },
{ date: '01/10/2022', id: 2, amount: 10 },
{ date: '01/11/2022', id: 3, amount: 1 },
{ date: '01/11/2022', id: 2, amount: 5 },
{ date: '01/11/2022', id: 1, amount: 15 }
] */
const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 2, amount: 5 };
const donation5 = { funderId: 1, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

const dailyRecord = [day1, day2];


type Donation = {
  funderId: number;
  amount: number;
}
 type Day ={
  donations:Donation[];
  day: Day[];

 }

type  FlattenedRecord = {
  date: string;
  id: number;
  amount: number;
}

function flatten(dailyRecord:Day[]): FlattenedRecord[] {
  const flattenedArray: FlattenedRecord[] = [];

  for (const day of dailyRecord) {
    const { date, donations } = day;

    for (const donation of donations) {
      const { funderId: id, amount } = donation;

      flattenedArray.push({
        date,
        id,
        amount,
      });
    }
  }

  return flattenedArray;
}
