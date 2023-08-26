function rgb(r: number, g: number, b: number): string {
  // Ensure RGB values are within the valid range
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Convert RGB values to hexadecimal
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  // Concatenate the hexadecimal values
  return hexR + hexG + hexB;
}

console.log(rgb(255, 255, 255)); // Output: "FFFFFF"
console.log(rgb(255, 255, 300)); // Output: "FFFFFF"
console.log(rgb(0, 0, 0)); // Output: "000000"
console.log(rgb(148, 0, 211)); // Output: "9400D3"