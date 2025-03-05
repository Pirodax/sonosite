// components/PaymentForm.tsx
import React from 'react';

interface PaymentFormProps {
  onPaymentSuccess?: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onPaymentSuccess }) => {
  const handlePayment = () => {
    // Simuler un paiement réussi
    alert('Paiement réussi !');
    if (onPaymentSuccess) {
      onPaymentSuccess();
    }
  };

  return (
    <div>
      <h2>Formulaire de Paiement (Placeholder)</h2>
      <button onClick={handlePayment}>Payer</button>
    </div>
  );
};

export default PaymentForm;
