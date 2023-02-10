export const handleYears = (arr) =>{
  const year = (new Date()).getFullYear();
  let projectYears = []
  for (let i = 0; i < arr.length; i++) {
    let years = year - i
    projectYears.push(years)
  }
  return projectYears
}
