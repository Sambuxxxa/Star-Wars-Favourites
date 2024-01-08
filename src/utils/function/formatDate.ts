export default function formatDate(inputDate?: string) {
  if (inputDate) {
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Месяцы в объекте Date нумеруются с 0, поэтому нужно добавить 1.
    const year = dateObject.getFullYear().toString();

    const hour = dateObject.getHours().toString().padStart(2, '0');
    const minute = dateObject.getMinutes().toString().padStart(2, '0');

    return `${day}.${month}.${year}`;
    // return `${day}.${month}.${year} ${hour}:${minute}`;
  }
}
