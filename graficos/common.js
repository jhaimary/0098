const getCSS = (variable) => {
    const bodyStyles = getComputedStyle(document.body);
    return bodyStyles.getPropertyValue(variable);
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

export { getCSS, tickConfig };
