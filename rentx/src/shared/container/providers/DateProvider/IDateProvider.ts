interface IDateProvider {
  compareInHors(start_date: Date, end_date: Date): Number;
  convertToUtc(date: Date): string;
  dateNow(): Date;
}

export { IDateProvider };
