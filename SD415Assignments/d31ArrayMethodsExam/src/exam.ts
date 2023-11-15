
 //4.Implement the firstLast function.  Use the appropriate array method in your function. 

  export function firstLast(names:string[]){
    let resultArray = names.map(function(fullName){
    const nameParts = fullName.split(" ");
     return {firstName:nameParts[0],lastName:nameParts[1]}
    });
    return resultArray;
  }
const names= ["Fred Smith","carl lind"]
let resultArray = firstLast(names);
console.log(resultArray);

//5. Use slice and splice to write TypeScript code for the replaceEnds function.  replaceEnds should be a pure function.
        //first two number arguments replace the first and second elements of the array, last two number arguments replace the 
        //last two elements of the array
         
        /*const arr = [5, 4, 3, 2, 1, 0];
        const result2 = [10, 9, 3, 2, 8, 7];
        assert.deepEqual(replaceEnds(arr, 10, 9, 8, 7), result2);
        assert.deepEqual(arr, [5, 4, 3, 2, 1, 0]); //original array is unchanged
    }); */
       
       
        // export function replaceEnds(arr: number[], startValue: number, endValue: number): number[] {
         
        //   // Create a copy of the original array to avoid modifying it directly
        //   const newArray = arr.slice();
        
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


        /*const arr = [5, 4, 3, 2, 1, 0];
        const result2 = [10, 9, 3, 2, 8, 7];
        assert.deepEqual(replaceEnds(arr, 10, 9, 8, 7), result2);
        assert.deepEqual(arr, [5, 4, 3, 2, 1, 0]); //original array is unchanged
    }); */
        const arr = [5, 4, 3, 2, 1, 0];
       
        export function replaceEnds(arr: number[], start1: number,start2:number, endV1: number,endV2: number): number[] {
         
          // Create a copy of the original array to avoid modifying it directly
          const newArray = arr.slice();
        
          // Replace the first and last elements
          newArray.splice(0, 2, start1,start2);// startIndex,deleted,newvalue
          newArray.splice(newArray.length - 2, 2, endV1,endV2);

        
          return newArray;
        }

        console.log(replaceEnds(arr,10,9,8,7));

// Implement functions higho, square, and absVal.
// higho takes a function and a number as arguments
// and returns the result of the function called on the number.
export function higho(func: (num: number) => number, numArr: number[]): number[] {
  return numArr.map(num => func(num));
}

// square function squares a given number
export function square(num: number): number {
  return num * num;
}

// absVal function returns the absolute value of a given number using a ternary operator
export function absVal(num: number): number {
  return num >= 0 ? num : -num;
}


// Example usage with the provided data
const session1: Session = { userId: 1, duration: 60 };
const session2: Session = { userId: 2, duration: 45 };
const session3: Session = { userId: 2, duration: 30 };
const session4: Session = { userId: 3, duration: 15 };
const session5: Session = { userId: 3, duration: 75 };

const day1: Day = { sessions: [session1, session2], date: "01/10/2022" };
const day2: Day = { sessions: [session3, session4, session5], date: "01/11/2022" };

const dailyRecord = [day1, day2]; //Day [];
      // type  

  type Session = {
          userId: number;
          duration: number;
      };
      
      type Day = {
          sessions: Session[];
          date: string;
      };
      
     
          // Utilize a for..of loop in a function, calculateDailyTotalDuration, to find the total workout duration for a given day. 

      export function calculateDailyTotalDuration(sessions: Session[]): number {
          let totalDuration = 0;
          for (const session of sessions) {
              totalDuration += session.duration;
          }
          return totalDuration;  // daily total duration
      }
      /* Develop a function, calculateTotalDuration, using a for..of loop, to find the total workout duration across all 
    days in the dailyRecord array. Utilize the previously defined calculateDailyTotalDuration function. */

      export function calculateTotalDuration(dailyRecord: Day[]): number {
          let totalDuration = 0;
          for (const day of dailyRecord) {
              totalDuration += calculateDailyTotalDuration(day.sessions);//120 225
          }
          return totalDuration;
      }
      //Write a function getAllSessions that will use the concat method to return an array with all  the sessions in the dailyRecord.
      export function getAllSessions(dailyRecord: Day[]): Session[] {
          let allSessions: Session[] = [];
          for (const day of dailyRecord) {
              allSessions = allSessions.concat(day.sessions);
          }
          return allSessions;
      }
          //Use an appropriate array method to get all sessions for a given userid .  Hint:  use getAllSessions.  
      export function getAllSessionsForUser(dailyRecord: Day[], userId: number): Session[] {
          const allSessions = getAllSessions(dailyRecord);
          return allSessions.filter(session => session.userId === userId);
      }
      //Use an appropriate array method to get array of just duration times [60, 45, 30, 15 ,75] Hint:  use getAllSessions.  

      export function getAllDurations(dailyRecord: Day[]): number[] {
          const allSessions = getAllSessions(dailyRecord);
          return allSessions.map(session => session.duration);
      }   
      
      
      
      // Example usage of the functions
      console.log(calculateDailyTotalDuration(day2.sessions)); // 120
      console.log(calculateTotalDuration(dailyRecord)); // 225
      console.log(getAllSessions(dailyRecord)); // [session1, session2, session3, session4, session5]
      console.log(getAllSessionsForUser(dailyRecord, 2)); // [session2, session3]
      console.log(getAllDurations(dailyRecord)); // [60, 45, 30, 15, 75]
      