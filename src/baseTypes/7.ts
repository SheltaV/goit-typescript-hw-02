/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Mon = 'Working',
  Tue = 'Working',
  Wed = 'Working',
  Thu = 'Working',
  Fri = 'Working',
  Sat = 'Weekend',
  Sun = 'Weekend'
}

function isWeekend(day: DayOfWeek):boolean {
  if (day === 'Working') {
  return false
  } 
  return true
}

isWeekend(DayOfWeek.Mon)