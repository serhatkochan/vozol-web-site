import React, {useEffect, useState} from 'react';

const MyImageComponent = ({src}) => {
  const [imageUrl, setImageUrl] = useState(src); // Varsayılan resim URL'i

  // Resmin var olup olmadığını kontrol etmek için bir fonksiyon
  const checkImageExists = (url, callback) => {
    var img = new Image();
    img.src = url;
    img.onload = function() {
      callback(true);
    };
    img.onerror = function() {
      callback(false);
    };
  };

  // Resmin var olup olmadığına göre resmi güncelleyen fonksiyon
  const updateImage = (url) => {
    checkImageExists(url, (exists) => {
      if (exists) {
        setImageUrl(url);
      } else {
        setImageUrl('public/static/images/500.png'); // Varsayılan resim URL'i
      }
    });
  };
  useEffect(() => {
    updateImage(`public/static/${src}.png`);
  }, []);

  // Resmi ekranda render etme
  return (
    <div>
      <img src={imageUrl} alt="Resim" />
    </div>
  );
};

export default MyImageComponent;
