const DIGIT_COUNT = 9;
const multiplier = 10 ** DIGIT_COUNT;

const randomId = string => `${string}-${Math.floor(Math.random() * multiplier)}`;

export default randomId;
