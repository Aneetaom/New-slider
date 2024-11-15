

function changeImage(thumbnail) {
    document.getElementById("slider-img").src = thumbnail.src;
  }

  let currentIndex = 0;
  const images = [
    "https://tse2.mm.bing.net/th?id=OIP.GKmxTDRbe9VHmAV0s8SaoQHaEO&pid=Api&P=0&h=220",
    "https://tse3.mm.bing.net/th?id=OIP.DaPMR0o6EaiTmn8BSwSnBwHaE7&pid=Api&P=0&h=220",
    "https://i.dawn.com/primary/2016/10/57fb50cb57140.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.DaPMR0o6EaiTmn8BSwSnBwHaE7&pid=Api&P=0&h=220",
    "https://rising-pakistan.com/wp-content/uploads/2020/04/Badshahi-Masjid-Lahore-1.jpg"
  ];

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("slider-img").src = images[currentIndex];
  }

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slider-img").src = images[currentIndex];
  }