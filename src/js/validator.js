export function isValidCardNumber(number) {
    if (!number || !/^\d+$/.test(number)) {
        console.log(`Invalid input: ${number}`);
        return false;
    }

    const digits = number.split('').reverse().map(n => parseInt(n, 10));
    console.log(`Reversed digits: ${digits}`);

    const checksum = digits.reduce((sum, digit, index) => {
        if (index % 2 === 1) {
            let double = digit * 2;
            if (double > 9) double -= 9;
            return sum + double;
        }
        return sum + digit;
    }, 0);

    console.log(`Checksum: ${checksum}`);
    return checksum % 10 === 0;
}

