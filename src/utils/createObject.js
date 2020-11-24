export default array =>
  array.reduce(
    (acc, elem) => ({
      ...acc,
      [elem]: elem
    }),
    {}
  );
