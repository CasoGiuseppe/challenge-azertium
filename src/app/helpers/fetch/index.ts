export const fetchImage = async ({ url }: {url: string}) => {
  let res = await fetch(url, {
    method: "GET"
  })

  if (res.status === 200) {
    const blob = await res.blob()
    const objectURL = URL.createObjectURL(blob)

    const img = document.createElement('img')
    img.src = objectURL

    console.log(img)
  }
}