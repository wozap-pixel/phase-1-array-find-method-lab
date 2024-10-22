// code your solution here
function superbowlWin(record) {
  // Use find() to look for the first winning record
  const win = record.find(entry => entry.result === "W");
  // Return the year if a win is found, otherwise return undefined
  return win ? win.year : undefined;
}
