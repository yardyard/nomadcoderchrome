// img 폴더에 있는 이미지들과 elements 이름을 같게 해야 함.
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];
  


 

  // images 배열에 있는 값들(0부터 5번 인덱스까지)을 랜덤하게 변수에 저장함.
  // 또한 images.length를 곱함으로서 사진의 갯수에 맞게 자동으로 랜덤값 조정됌.
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  
  // JS에서 createElement를 통해 "img"라는 HTML의 element를 만들어줌.
  const bgImage = document.createElement("img");

  // 만들어준 element에 src(주소)를 연결해줌.
  bgImage.src = `img/${chosenImage}`;

  // appendChild는 body에 element를 추가해준다.
  document.body.appendChild(bgImage);