import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
export const wp = (persentage) => {
  const width = deviceWidth;
  return (persentage * width) / 100;
};
export const hp = (persentage) => {
  const height = deviceWidth;
  return (persentage * height) / 100;
};

export const getColumnCount = () => {
  if (deviceWidth >= 1024) {
    return 4;
  } else if (deviceWidth >= 768) {
    return 3;
  } else {
    return 2;
  }
};
export const getImageSize = (height, width) => {
  if (width > height) {
    return 250;
  } else if (width < height) {
    return 300;
  } else {
    return 200;
  }
};

export const capitalize = (str) => {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
};
