let firstName: string = "john";
let lastName: string = "doe";
function uppercaseFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
firstName = uppercaseFirstLetter(firstName);
lastName = uppercaseFirstLetter(lastName);
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);