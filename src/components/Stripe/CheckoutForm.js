import React, { useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Box, Button } from "@chakra-ui/react";

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  // const [paymentRequest, setPaymentRequest] = useState(null);

  // useEffect(() => {
  //   if (stripe) {
  //     const pr = stripe.paymentRequest({
  //       country: "US",
  //       currency: "usd",
  //       total: {
  //         label: "Demo total",
  //         amount: 1099,
  //       },
  //       requestPayerName: true,
  //       requestPayerEmail: true,
  //     });
  //     // Check the availability of the Payment Request API.
  //     pr.canMakePayment().then((result) => {
  //       if (result) {
  //         console.log(result);
  //         setPaymentRequest(pr);
  //       }
  //     });
  //   }
  // }, [stripe]);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret: clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/confirmation?order_id=${localStorage.getItem(
          "orderId"
        )}`,
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      // https://example.com/order/123/complete?payment_intent=pi_3OmDoRDsONF5GHPk2odl8QHa&payment_intent_client_secret=pi_3OmDoRDsONF5GHPk2odl8QHa_secret_aNMSG2kSZEwdyrbhpBJX7Jbhg&redirect_status=succeeded
      setErrorMessage(error.message);
    } else {
      console.log("Upload the records");
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <Button
          colorScheme="blue"
          w={"full"}
          my={"5"}
          type="submit"
          disabled={!stripe || !elements}
        >
          Pay
        </Button>
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </Box>
  );
};

export default CheckoutForm;

// http://localhost:3000/confirmation?order_id{&&payment_intent=pi_3Oo2fRDsONF5GHPk1kUSTtnf&payment_intent_client_secret=pi_3Oo2fRDsONF5GHPk1kUSTtnf_secret_Yy6suYMzu4RSW6cZ1EyZgm1yQ&redirect_status=succeeded
