
export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 40
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 90
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((Option) => {
    if (Option.id === deliveryOptionId) {
      deliveryOption = Option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}