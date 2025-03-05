// pages/booking.tsx
import type { NextPage } from 'next';
import { useState } from 'react';
import Calendar from '../components/Calendar';
import PaymentForm from '../components/PaymentForm';

interface Reservation {
  start: Date;
  end: Date;
  title: string;
}

const Booking: NextPage = () => {
  const [events, setEvents] = useState<Reservation[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleDateSelect = (slotInfo: any) => {
    console.log('Créneau sélectionné:', slotInfo);
    setSelectedSlot(slotInfo);
    // Ici, vous pouvez ajouter une confirmation avant d'enregistrer la réservation.
    const newReservation: Reservation = {
      start: slotInfo.start,
      end: slotInfo.end,
      title: 'Réservé'
    };
    setEvents([...events, newReservation]);
  };

  const handlePaymentSuccess = () => {
    console.log('Paiement validé !');
    setPaymentCompleted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Prise de Rendez-vous</h1>
      <p>Réservez votre séance de massage sonore via le calendrier ci-dessous.</p>

      <section>
        <h2>1. Sélectionnez votre créneau</h2>
        <Calendar onDateSelect={handleDateSelect} events={events} />
        {selectedSlot && (
          <p>
            Créneau sélectionné : {selectedSlot.start.toLocaleString()} - {selectedSlot.end.toLocaleString()}
          </p>
        )}
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>2. Paiement de la séance</h2>
        <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
        {paymentCompleted && (
          <p>Merci pour votre paiement ! Votre rendez-vous est confirmé.</p>
        )}
      </section>
    </div>
  );
};

export default Booking;
