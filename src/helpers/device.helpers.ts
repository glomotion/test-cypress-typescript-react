// @NOTE: Tis sad that we still have to resort to doing this, but sadly,
// Safari can be quite tricky to narrow/track down these days
export function isIos() {
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
}

export const isSafari = () =>
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
