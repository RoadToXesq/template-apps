export const getSrcParams = () => {
  const utmSource = getParamUrl('utm_source');
  const utmMedium = getParamUrl('utm_medium');
  const utmCampaign = getParamUrl('utm_campaign');
  console.log(`${utmSource}|${utmMedium}|${utmCampaign}`);

  return `?src=${utmSource}|${utmMedium}|${utmCampaign}&utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`;
  // return `${utmSource}|${utmMedium}|${utmCampaign}`;
};

export const getParamUrl = (param: string) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get(param) ?? '';
};
