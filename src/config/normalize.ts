import {moderateScale} from 'react-native-size-matters';

function normalize(number: number, factor = 0.25) {
  return moderateScale(number, factor);
}

export default normalize;

// import {PixelRatio, Dimensions} from 'react-native';

// const ratio = PixelRatio.get();

// const normalize = (size: number) => {
//   const {width, height} = Dimensions.get('window');

//   if (ratio >= 2 && ratio < 3) {
//     if (width < 360) {
//       return size * 0.95;
//     } else if (height < 667) {
//       return size;
//     } else if (height >= 667 && height <= 735) {
//       return size * 1.15;
//     }
//     return size * 1.25;
//   } else if (ratio >= 3 && ratio < 3.5) {
//     if (width < 360) {
//       return size;
//     } else if (height < 667) {
//       return size * 1.15;
//     } else if (height >= 667 && height <= 735) {
//       return size * 1.2;
//     }

//     return size * 1.27;
//   } else if (ratio >= 3.5) {
//     if (width < 360) {
//       return size;
//     } else if (height < 667) {
//       return size * 1.2;
//     } else if (height >= 667 && height <= 735) {
//       return size * 1.25;
//     }

//     return size * 1.4;
//   }

//   return size;
// };

// export default normalize;

// import {Dimensions, Platform, PixelRatio} from 'react-native';

// export var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
//   Dimensions.get('window');

// // based on iPhone 8's scale
// const wscale: number = SCREEN_WIDTH / 375;
// const hscale: number = SCREEN_HEIGHT / 667;

// export default function normalize(
//   size: number,
//   based: 'width' | 'height' = 'width',
// ) {
//   const newSize = based === 'height' ? size * hscale : size * wscale;
//   if (Platform.OS === 'ios') {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize));
//   } else {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
//   }
// }
