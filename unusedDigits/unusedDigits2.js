const unusedDigits = (...params) => {
    if (!params) return '0123456789';

    const regexp = RegExp(`[${[...params].join('')}]`, 'g');
    return '0123456789'.replace(regexp, '');
}

module.exports = unusedDigits;
