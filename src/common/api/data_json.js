export const task = [
  {
    id: 1,
  },
];

export function api(headers) {
  console.log('api headers: ', headers);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          status: 200,
        },
      });
    }, 500);
  });
}
