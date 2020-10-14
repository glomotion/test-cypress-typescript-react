export const gridUnits = (multiplier: number): string => `${multiplier * 4}px`;

export const checkOutOfBounds = ({
  x,
  y,
  left,
  top,
  width,
  height,
  tolerance = 2,
}) => {
  let newTop = top;
  let newHeight = height;
  if (window.scrollY >= top) {
    newTop -= window.scrollY;
    newHeight += window.scrollY;
  }
  return (
    y >= Math.floor(newHeight + newTop - tolerance) ||
    y <= newTop + tolerance ||
    x >= Math.floor(width + left - tolerance) ||
    x <= left + tolerance
  );
};

export const getOuterHeight = (el: HTMLElement) => {
  const computedStyles = window.getComputedStyle(el);
  const marginTop = parseInt(computedStyles.getPropertyValue('margin-top'), 10);
  const marginBottom = parseInt(
    computedStyles.getPropertyValue('margin-bottom'),
    10,
  );
  return el.offsetHeight + marginTop + marginBottom;
};

export const waitForImageToLoad = (img: HTMLImageElement) =>
  new Promise(res => {
    const onLoad = () => {
      res();
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
    };

    const onError = (err: UIEvent) => {
      console.error('Awww snap! <img> or <picture> LOAD ERROR:', err, img.src);
      onLoad();
    };

    if (img.complete) {
      res();
    } else {
      img.addEventListener('load', onLoad);
      img.addEventListener('error', onError);
    }
  });
