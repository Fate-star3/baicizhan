import init from './rem'
export const px2rem = (px: number): string => {
  const fontSize = init()
  // console.log(fontSize);
  
  return `
      ${px / fontSize}rem
    `
};

// 全局样式
export default {
  "theme_color": "#C20C0C"
}