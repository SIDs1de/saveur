import { BookingDetails } from '@/domain/booking/types';
import { sleep } from '@/shared/utils';

export async function submitBooking(booking: BookingDetails): Promise<BookingDetails> {
  await sleep(1500);
  return booking;
}
