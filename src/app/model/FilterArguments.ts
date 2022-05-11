export class FilterArguments {
  name?: string;
  surname?: string;
  pageNumber?: number;
  isSorted: boolean;
  orderAsc: boolean;

  constructor() {
    this.name = '';
    this.surname = '';
    this.pageNumber = 1;
    this.isSorted = true;
    this.orderAsc = true;
  }
}
