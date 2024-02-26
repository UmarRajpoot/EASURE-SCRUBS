import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASEURL, BASEURLDev } from "../../Config/URL";
import { Elements, ExpressCheckoutElement } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const Payments = ({ clientSecret }) => {
  const [StripePromise, setStripePromise] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (clientSecret === "") {
      navigate("/checkout?step=shipping_address", { replace: true });
    }
  }, [clientSecret]);

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

  useEffect(() => {
    if (clientSecret !== "") {
      getPublishKey();
    }
  }, [clientSecret]);
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
