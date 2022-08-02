declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

// scss.d.ts
declare module '*.css' {
  const content: { [className: string]: string; };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string; };
  export default content;
}
