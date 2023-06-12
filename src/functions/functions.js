export const shortenUrl = (url) => {
    let newUrl = [];
    for (let i = 0; i<url.length; i++) {

        if (url[i] === '?') {
            break
        } else {
            newUrl.push(url[i])
        }
    }
    let returnString = ''
    for (let i = 0; i<newUrl.length; i++) {
        returnString += newUrl[i]
    }
    return returnString
}