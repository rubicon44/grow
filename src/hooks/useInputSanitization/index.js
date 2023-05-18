import DOMPurify from "dompurify";

export const useInputSanitization = () => {
  const sanitizeInput = (
    value,
    options = { ALLOWED_TAGS: [], trim: false }
  ) => {
    if (options.trim) {
      value = value.trim();
    }
    const sanitizedValue = DOMPurify.sanitize(value, options);
    return sanitizedValue;
  };

  return { sanitizeInput };
};
