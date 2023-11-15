
// function replaceEnds(arr: number[], startValue: number, endValue: number): number[] {
//   if (arr.length < 2) {
//     throw new Error("Array must have at least two elements");
//   }

//   // Create a copy of the original array to avoid modifying it directly
//   const newArray = arr.slice();
//     //newArray = [1, 2, 3, 4, 5];


//   // Replace the first and last elements
//   newArray.splice(0, 1, startValue);
//   newArray.splice(newArray.length - 1, 1, endValue);
  

//   return newArray;
// }

// const arr = [1, 2, 3, 4, 5];

// const result = replaceEnds(arr, 0, 100);
// console.log("expect [0, 2, 3, 4, 100]:", result);

// const result2 = replaceEnds(arr, 100, 0);
// console.log("expect [100, 2, 3, 4, 0]:", result2);



const session1: Session = { userId: 1, duration: 60 };
const session2: Session = { userId: 2, duration: 45 };
const session3: Session = { userId: 2, duration: 30 };
const session4: Session = { userId: 3, duration: 15 };
const session5: Session = { userId: 3, duration: 75 };

const day1: Day = { sessions: [session1, session2], date: "01/10/2022" };
const day2: Day = { sessions: [session3, session4, session5], date: "01/11/2022" };

const dailyRecord: DailyRecord = [day1, day2];
      // type  

  type Session = {
          userId: number;
          duration: number;
      };
      
      type Day = {
          sessions: Session[];
          date: string;
      };
      
      type DailyRecord = Day[];
      
      function calculateDailyTotalDuration(sessions: Session[]): number {
          let totalDuration = 0;
          for (const session of sessions) {
              totalDuration += session.duration;
          }
          return totalDuration;  // daily total duration
      }
      
      function calculateTotalDuration(dailyRecord: DailyRecord): number {
          let totalDuration = 0;
          for (const day of dailyRecord) {
              totalDuration += calculateDailyTotalDuration(day.sessions);
          }
          return totalDuration;
      }
      
      function getAllSessions(dailyRecord: DailyRecord): Session[] {
          let allSessions: Session[] = [];
          for (const day of dailyRecord) {
              allSessions = allSessions.concat(day.sessions);
          }
          return allSessions;
      }
      
      function getAllSessionsForUser(dailyRecord: DailyRecord, userId: number): Session[] {
          const allSessions = getAllSessions(dailyRecord);
          return allSessions.filter(session => session.userId === userId);
      }
      
      function getAllDurations(dailyRecord: DailyRecord): number[] {
          const allSessions = getAllSessions(dailyRecord);
          return allSessions.map(session => session.duration);
      }
      
      
      
      // Example usage of the functions
      console.log(calculateDailyTotalDuration(day2.sessions)); // 120
      console.log(calculateTotalDuration(dailyRecord)); // 225
      console.log(getAllSessions(dailyRecord)); // [session1, session2, session3, session4, session5]
      console.log(getAllSessionsForUser(dailyRecord, 2)); // [session2, session3]
      console.log(getAllDurations(dailyRecord)); // [60, 45, 30, 15, 75]



 export function filterRange(arr: number[], a: number, b: number): number[] {

    let result = arr.filter(numbers=>numbers >=a && numbers <= b);
    let newArr:number[] = result
    return newArr;
   }
      let arr = [5, 3, 8, 1];
      console.log(filterRange(arr,1,3))
      