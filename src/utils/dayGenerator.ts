export class dateGenerator {

  /**
   * Gets today's date in YYYY-MM-DD format.
   * @return {string}
   */
  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Enero es 0!
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}