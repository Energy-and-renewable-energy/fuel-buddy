export const getGasStations = async () => {
  const url =
    "https://api.apify.com/v2/datasets/XNfzEMoqfsLBT5bOT/items?token=apify_api_zvLd5bcc9q4naeNIcfU5X3oc9guZJo1npQcP";
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};