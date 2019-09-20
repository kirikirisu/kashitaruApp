const keyGenerator = () => {
  const key = new Date().getTime() / Math.random();
  return key;
};

export default keyGenerator;
