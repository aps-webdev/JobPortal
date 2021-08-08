const getRequest = async (url, params = {}) => {
  const queryParams = Object.entries(params)
    .map((param) => {
      return `${param[0]}=${param[1]}`;
    })
    .join('&');
  console.log('queryParams :>> ', queryParams);
  const response = await fetch(`${url}?${queryParams}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
};

export default getRequest;
