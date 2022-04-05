export const getTailwindSizing = (): string[] => {
  let templateArray: string[] = ["0"];
  let size = 0;
  const maxSize = 96;
  for (let index = 0; size < maxSize; index++) {
    if (size < 4) {
      size += 0.5;
    } else if (size >= 4 && size < 12) {
      size += 1;
    } else if (size >= 12 && size < 20) {
      size += 2;
    } else if (size >= 20) {
      size += 4;
    }

    templateArray.push(String(size));
  }

  return templateArray;
};
