export const base64 = (blob, callback) => {
  var baseImg
  var res = new FileReader();
  res.readAsDataURL(blob);
  res.onload = async function (e) {
    let index = e.target.result.indexOf(',')
    baseImg = await e.target.result.substring(index + 1)
    callback(baseImg)
  }
}

export function sortNumber (a, b) {
  return a - b
}
