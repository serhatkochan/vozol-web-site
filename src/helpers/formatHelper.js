const GetCurrency = (price) => {
  const locale = "tr-TR";
  const options = {
    style: "currency",
    currency: "TRY",
  };
  return price.toLocaleString(locale, options);
}

const formatHelper = {
  GetCurrency
}

export default formatHelper;
