export function isWhiteSpace(char: string): boolean {
    return /\s/.test(char);
}
  
export function isDigit(char: string): boolean {
    return /\d/.test(char);
}