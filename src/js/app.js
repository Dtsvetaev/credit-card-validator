import { isValidCardNumber } from "./validator";
import { getCardType } from "./card-type";

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("card-number");
    const validateBtn = document.getElementById("validate-btn");
    const result = document.getElementById("result");
    const cardIcons = document.querySelectorAll(".card-icon");

    validateBtn.addEventListener("click", () => {
        const cardNumber = input.value.trim();

        if (!cardNumber) {
            result.textContent = "Please enter a card number";
            result.style.color = "red";
            return;
        }

        if (isValidCardNumber(cardNumber)) {
            const cardType = getCardType(cardNumber);
            result.textContent = `Valid card (${cardType})`;
            result.style.color = "green";

            cardIcons.forEach((icon) => {
                if (icon.dataset.type === cardType) {
                    icon.classList.add("active");
                } else {
                    icon.classList.remove("active");
                }
            });
        } else {
            result.textContent = "Invalid card number";
            result.style.color = "red";
            cardIcons.forEach((icon) => icon.classList.remove("active"));
        }
    });
});
