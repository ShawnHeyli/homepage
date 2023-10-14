// Desc: Format date from dd-mm-yyyy to month(fully writen) day, year
export const getFormattedDate = (dateString: string) => {
  const [day, month, year] = dateString.split("-").map(item => parseInt(item));

  const date = new Date(year, month - 1, day);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septemper",
    "October",
    "November",
    "December",
  ];

  const monthName = months[date.getMonth()];

  const formattedDate = `${monthName} ${date.getDate()}, ${date.getFullYear()}`;

  return formattedDate;
};
