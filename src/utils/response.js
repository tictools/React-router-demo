export const throwResponse = ({ body = "", status, statusText }) => {
  throw new Response(body, {
    status,
    statusText,
  });
};
