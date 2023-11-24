export default class ToDo {

  constructor() {}

  public lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    let current = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
        current = Math.max(map.get(s[i]) + 1, current);
      }
      map.set(s[i], i);
      longest = Math.max(longest, i - current + 1);
    }
    return longest;
};

public isValid(s: string): boolean {
  const array = [...s]
  array.forEach((bracket, index) => {
      switch (bracket) {
        case '{':
          if (array[index + 1] !== '}') return false;
        case '(':
          if (array[index + 1] !== ')') return false;
        case '[':
          if (array[index + 1] !== ']') return false;
        default:
          break;
      }
  })
  return true;
};
}