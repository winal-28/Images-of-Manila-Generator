const requestUrl =
  "https://api.unsplash.com/search/photos?query=manila&client_id=pH5LPO4CliqEkEa6r9I2uwtfO170XM5j4ouwUu_sAPY";
const getImages = document.querySelector(".getImages");
const imageOfManila = document.querySelector(".image-of-manila");

getImages.addEventListener("click", async () => {
  let randomImage = await getNewImage();
  imageOfManila.src = randomImage;
});

async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      let allImages = data.results[randomNumber];
      return allImages.urls.regular;
    });
}
