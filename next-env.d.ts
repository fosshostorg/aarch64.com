/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

// needed since SCSS somehow does not resolve properly in next.js
// https://linguinecode.com/post/how-to-fix-cannot-find-module-css-scss-nextjs
declare module '*.scss';