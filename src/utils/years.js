export const handleYears = (arr) =>{
  const year = (new Date()).getFullYear();
  let projectYears = []
  for (let i = 0; i < arr.length; i++) {
    let years = year - i
    projectYears.push(years)
  }
  return projectYears
}



const prevYears = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
handleYears(prevYears);