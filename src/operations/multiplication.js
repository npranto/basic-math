const multiplication = (...numbers) => {
    return numbers.reduce((prev, curr) => {
        return prev * curr;
    });
}

export default multiplication;