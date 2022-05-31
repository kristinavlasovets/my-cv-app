export const checkEmpty = (value) => {
    if (value.length < 1) {
        return "The field is empty. Please fill in."
    }
}

export const checkCapitalLetter = (value) => {
    if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
        return "The first letter must be capital."
    }
}

export const checkSpaces = (value) => {
    if (value.charAt(0) === ' ' || value.charAt(value.length - 1) === ' ') {
        return "Fields must not contain spaces at the beginning or end."
    }
}

export const checkUrl = (value) => {
    if (value.slice(0, 8) !== 'https://') {
        return "The website field must always start with 'https://'"
    }
}

export const checkLimit = (value) => {
    if (value.length >= 600) {
        return "Field character limit exceeded."
    }
}

