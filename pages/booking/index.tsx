import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm />
      <OrderSummary />
      <CancellationPolicy />
    </div>
  );
}
