const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

let findJose = users.find(user => user.firstName === 'Jose')
let findPremiums = users.filter(user => user.isPremiumMember === true)
let getLastnames = users.map(user => user.lastName)

let loginMore10 = users.filter (user => user.logins > 10 )
console.log(loginMore10.map(user => user.firstName + " " + user.lastName))

let loginNumbers = users.map (user => user.logins)
console.log(loginNumbers.reduce(function(login, total) {
    return total + login; }, 0));