// eslint-disable-next-line @typescript-eslint/no-explicit-any
// This function is currently unused
export function removeUndefinedObjectKeys(obj: { [key: string]: any }) {
  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key])
  return obj
}
