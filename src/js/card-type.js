export function getCardType(number) {
    const patterns = {
        visa: /^4/,
        mastercard: /^5[1-5]/,
        amex: /^3[47]/,
        discover: /^6/,
        mir: /^220[0-4]/,
    };
    for (const [type, pattern] of Object.entries(patterns)) {
        if (pattern.test(number)) return type;
    }
    return 'unknown';
}