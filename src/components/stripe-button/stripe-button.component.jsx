import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //because it wants it in pennies/cents
  const publishableKey =
    "pk_test_51J5BcxGVOfGkael9et7AziS1hunUfmdzzfg4HIoRVtoU9VKXWL6lhXxDk28FBv4kG9riue1exE64TjnLN1YKL76N00VP8Yk75V";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is: ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
