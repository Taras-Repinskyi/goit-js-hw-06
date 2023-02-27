const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeImageCard = ({url, alt}) => `<li class="gallery-item">
        <img src="${url}" alt="${alt}" width ="380">
  </li>`;

const imgList = document.querySelector('.gallery');
const makeImagesMarkup = images.map((el) => makeImageCard(el)).join('');
imgList.insertAdjacentHTML('afterbegin', makeImagesMarkup);
console.log(makeImagesMarkup);