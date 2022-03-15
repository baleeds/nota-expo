export const ErrorMessages = {
  unknown: "We've encountered an unknown error",
  network: `We're having trouble connecting`,
  isRequired(field: string) {
    return `${field} is required`;
  },
  mustBeValid(field: string) {
    return `${field} must be valid`;
  },
  maxLength(field: string, length: number) {
    return `${field} must be at most ${length} characters`;
  },
  minLength(field: string, length: number) {
    return `${field} must be at least ${length} ${length === 1 ? 'character' : 'characters'}`;
  },
};
