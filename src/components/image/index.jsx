import {Image as AntImage} from "antd";
import {useEffect, useState} from "react";

const MyImageComponent = ({src, preview = true}) => {
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
        setImageUrl('/static/images/elf_bar_bc_5000_blue_razz_ice.png'); // Varsayılan resim URL'i
      }
    });
  };
  useEffect(() => {
    updateImage(`/static/${src}.png`);
  }, []);

  return (
    <AntImage
      src={imageUrl}
      preview={preview}/>
  );
};

export default MyImageComponent;
