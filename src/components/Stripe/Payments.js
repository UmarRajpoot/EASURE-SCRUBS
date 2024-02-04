import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASEURL, BASEURLDev } from "../../Config/URL";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payments = () => {
  const [StripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(
    "pi_3Og8QwDsONF5GHPk231bi0Te_secret_FJUgrUv274PEkVz0f9wufGDwC"
  );

  const getPublishKey = async () => {
    return await axios
      .get(BASEURL + "/config")
      .then((resp) => {
        const { publishablekey } = resp.data;
        return setStripePromise(loadStripe(publishablekey));
      })
      .catch((error) => {
        console.log("pub error", error);
        console.log(error);
      });
  };

  const getClientSecret = async () => {
    return await axios
      .post(BASEURLDev + "/create-payment-intent", {})
      .then((resp) => {
        const { clientSecrets } = resp.data;
        return setClientSecret(clientSecrets);
      })
      .catch((error) => {
        console.log("client error", error);

        console.log(error);
      });
  };

  useEffect(() => {
    getPublishKey();
  }, []);
  //   useEffect(() => {
  //     getClientSecret();
  //   }, []);
  return (
    <Box>
      {StripePromise && clientSecret && (
        <Elements stripe={StripePromise} options={{ clientSecret }}>
          <Box
          // display={"flex"}
          // alignItems={"center"}
          // justifyContent={"center"}
          // my={"10"}
          >
            {clientSecret && StripePromise && (
              <CheckoutForm clientSecret={clientSecret} />
            )}
          </Box>
        </Elements>
      )}
    </Box>
  );
};

export default Payments;
