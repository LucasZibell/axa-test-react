const lastSpaceAndComma = -2;
export default array => array.reduce((acc, elem) => `${elem}, ${acc}`, '').slice(0, lastSpaceAndComma);
