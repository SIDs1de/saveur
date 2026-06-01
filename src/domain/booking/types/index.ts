export enum BookingStep {
  FORM,
  SUCCESS,
}

export type BookingDetails = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
};
