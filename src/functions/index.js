export const firestoreAutoId = () => {
  const CHARS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let autoId = '';

  for (let i = 0; i < 30; i++) {
    autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return autoId;
};

export const dollarSign = num => {
  if (num <= 0) {
    return 'Invalid input';
  } else if (num <= 1) {
    return '$';
  } else if (num <= 2) {
    return '$$';
  } else if (num <= 3) {
    return '$$$';
  } else if (num <= 4) {
    return '$$$$';
  } else if (num <= 5) {
    return '$$$$$';
  } else {
    return 'Invalid input >5';
  }
};
