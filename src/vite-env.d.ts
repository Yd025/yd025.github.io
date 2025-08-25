/// <reference types="vite/client" />

// This tells TypeScript how to handle imports for various image files.
// It ensures that when you import an image, TypeScript understands it
// as a valid module with a default export (the image path).

// declare module '*.svg' {
//   const svgContent: any;
//   export default svgContent;
// }

// declare module '*.png' {
//   const pngContent: any;
//   export default pngContent;
// }

// declare module '*.jpg' {
//   const jpgContent: any;
//   export default jpgContent;
// }

// declare module '*.jpeg' {
//   const jpegContent: any;
//   export default jpegContent;
// }

// // This handles PDF file imports, like for your resume.
// declare module '*.pdf' {
//   const pdfContent: any;
//   export default pdfContent;
// }