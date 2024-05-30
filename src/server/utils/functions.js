
export const emailValidator = function (v) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return regex.test(v)
}

export function generateShortId(length = 6) {
  return [...Array(length)]
      .map(() => Math.random().toString(36)[2])
      .join('');
}