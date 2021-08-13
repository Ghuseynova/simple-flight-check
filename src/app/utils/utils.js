export function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export function getFormatDate(date) {
  const newDate = new Date(date);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const year = newDate.getFullYear();
  const month = months[newDate.getMonth()];
  const day = newDate.getDate();

  return `${day} ${month}, ${year}`;
}

export function getFormatTime(date) {
  const newDate = new Date(date);

  const hour =
    newDate.getHours() <= 9 ? '0' + newDate.getHours() : newDate.getHours();
  const minute =
    newDate.getMinutes() <= 9
      ? '0' + newDate.getMinutes()
      : newDate.getMinutes();

  return `${hour}:${minute}`;
}
