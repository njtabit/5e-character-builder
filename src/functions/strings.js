export const capitalize = str => {
  if (typeof str === "string") {
    const string = str[0].toUpperCase() + str.slice(1)
    return string
  } else {
    console.error("Non-string objects cannot be capitalized")
  }
}
