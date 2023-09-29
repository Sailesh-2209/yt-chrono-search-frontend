export const formatNumber = (val) => {
    let num = Number.parseInt(val);

    if (num < 1000) {
        return num.toString();
    } else if (num < 10_000) {
        num = +(num * 1.0 / 1000).toFixed(2);
        return (num.toString() + " K");
    } else if (num < 100_000) {
        num = +(num * 1.0 / 1000).toFixed(1);
        return (num.toString() + " K");
    } else if (num < 1_000_000) {
        num = Math.round(num * 1.0 / 1000);
        return (num.toString() + " K");
    } else if (num < 10_000_000) {
        num = +(num * 1.0 / 1_000_000).toFixed(2);
        return (num.toString() + " M");
    } else if (num < 100_000_000) {
        num = +(num * 1.0 / 1_000_000).toFixed(1);
        return (num.toString() + " M");
    } else {
        num = Math.round(num * 1.0 / 1_000_000);
        return (num.toString() + " M");
    }
}

export const formatDate = (val) => {
    const dateTime = new Date(val);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    return dateTime.toLocaleDateString(undefined, options);
}
