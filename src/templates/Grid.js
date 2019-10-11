import styled, { css } from 'styled-components'

export default styled.div`
  padding-left: 15px;
  padding-right: 15px;
  float: left;
  width: ${({ xs = 12 }) => (xs * 100) / 12}%;
  &::before,
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  & + & {
    padding-left: 0;
  }
  ${({ push, pull }) => {
    let r = css``
    if (push) {
      r = r.concat(css`
        margin-left: ${(push * 100) / 12}%;
      `)
    }
    if (pull) {
      r = r.concat(css`
        margin-right: ${(pull * 100) / 12}%;
      `)
    }
    return r
  }}
  &:before,
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    ${({ sm, pushSm, pullSm }) => {
      let r = css``
      if (sm) {
        r = r.concat(css`
          width: ${(sm * 100) / 12}%;
        `)
      }
      if (pushSm) {
        r = r.concat(css`
          margin-left: ${(pushSm * 100) / 12}%;
        `)
      }
      if (pullSm) {
        r = r.concat(css`
          margin-right: ${(pullSm * 100) / 12}%;
        `)
      }
      return r
    }}
  }
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    ${({ md, pushMd, pullMd }) => {
      let r = css``
      if (md) {
        r = r.concat(css`
          width: ${(md * 100) / 12}%;
        `)
      }
      if (pushMd) {
        r = r.concat(css`
          margin-left: ${(pushMd * 100) / 12}%;
        `)
      }
      if (pullMd) {
        r = r.concat(css`
          margin-right: ${(pullMd * 100) / 12}%;
        `)
      }
      return r
    }}
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    ${({ lg, pushLg, pullLg }) => {
      let r = css``
      if (lg) {
        r = r.concat(css`
          width: ${(lg * 100) / 12}%;
        `)
      }
      if (pushLg) {
        r = r.concat(css`
          margin-left: ${(pushLg * 100) / 12}%;
        `)
      }
      if (pullLg) {
        r = r.concat(css`
          margin-right: ${(pullLg * 100) / 12}%;
        `)
      }
      return r
    }}
  }
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    ${({ xl, pushXl, pullXl }) => {
      let r = css``
      if (xl) {
        r = r.concat(css`
          width: ${(xl * 100) / 12}%;
        `)
      }
      if (pushXl) {
        r = r.concat(css`
          margin-left: ${(pushXl * 100) / 12}%;
        `)
      }
      if (pullXl) {
        r = r.concat(css`
          margin-right: ${(pullXl * 100) / 12}%;
        `)
      }
      return r
    }}
  }
`
