export const fetchImage = async ({ url }: {url: string}) => {
  const hearder = {
      'method': 'GET',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
  }
  let res = await fetch(url, hearder)

  if (res.status === 200) {
    const blob = await res.blob()
    const objectURL = URL.createObjectURL(blob)

    const img = document.createElement('img')
    img.src = objectURL
    img.onload = function() {
      console.log('load')
    }
    return img
  }
}