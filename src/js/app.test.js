import { isValidCardNumber } from "./validator.js";
import { getCardType } from "./card-type.js";

describe("Credit Card Validator Tests", () => {
  test.each([
    ["4111111111111111", true],  // Visa (валидная)
    ["5500000000000004", true],  // MasterCard (валидная)
    ["340000000000009", true],   // American Express (валидная)
    ["6011000000000004", true],  // Discover (валидная)
    ["2202200222022020", true],  // Мир (валидная)
    ["1234567890123456", false], // Невалидный номер
    ["abcdefg", false],          // Некорректные символы
    ["", false],                 // Пустая строка
  ])("isValidCardNumber(%s) should return %s", (cardNumber, expected) => {
    expect(isValidCardNumber(cardNumber)).toBe(expected);
  });

  test.each([
    ["4111111111111111", "visa"],       // Visa
    ["5500000000000004", "mastercard"], // MasterCard
    ["340000000000009", "amex"],        // American Express
    ["6011000000000004", "discover"],   // Discover
    ["2200000000000000", "mir"],        // Мир
    ["0000000000000000", "unknown"],    // Неизвестный номер
  ])("getCardType(%s) should return %s", (cardNumber, expected) => {
    expect(getCardType(cardNumber)).toBe(expected);
  });
});
