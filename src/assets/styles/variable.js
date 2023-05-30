import { css } from "styled-components";

export const mediaquery = {
  desktop: (...args) => css`
    @media (min-width: 1280px) {
      ${css(...args)}
    }
  `,

  // todo: 名称変更予定
  desk: (...args) => css`
    @media (min-width: 376px) {
      ${css(...args)}
    }
  `,

  phone: (...args) => css`
    @media (max-width: 375px) {
      ${css(...args)}
    }
  `,
};
