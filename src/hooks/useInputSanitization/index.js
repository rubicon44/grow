import DOMPurify from "dompurify";

export const useInputSanitization = () => {
  const sanitizeInput = (
    value,
    options = { ALLOWED_TAGS: [], trim: false }
  ) => {
    let sanitizedValue = value;

    if (options.trim) {
      sanitizedValue = sanitizedValue.trim();
    }

    sanitizedValue = DOMPurify.sanitize(sanitizedValue, options);
    return sanitizedValue;
  };

  return { sanitizeInput };
};
