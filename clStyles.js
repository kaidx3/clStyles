/**
 * Formats text with the specified color and optional bold styling for console output.
 *
 * @param {string} text - The text to be styled.
 * @param {string} color - The ANSI color code for the text (e.g., "\x1b[32m" for green).
 * @param {boolean} [isBold=false] - Optional flag to make the text bold.
 * @returns {string} - The styled text with applied color and bold settings.
 *
 * @example
 * styledText("Hello World", "\x1b[32m", true);
 * // Returns bold green text: "Hello World".
 */
export const styledText = (text, color, isBold = false) => {
    const boldCode = isBold ? colors.bold : "";
    return `${boldCode}${color}${text}${colors.reset}`;
};
