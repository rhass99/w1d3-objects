let data = {
    members: {
        f01: {
            name: "Alice",
            age: 15,
            follows: ["f02", "f03", "f04"]
        },
        f02: {
            name: "Bob",
            age: 20,
            follows: ["f05", "f06"]
        },
        f03: {
            name: "Charlie",
            age: 35,
            follows: ["f01", "f04", "f06"]
        },
        f04: {
            name: "Debbie",
            age: 40,
            follows: ["f01", "f02", "f03", "f05", "f06"]
        },
        f05: {
            name: "Elizabeth",
            age: 45,
            follows: ["f04"]
        },
        f06: {
            name: "Finn",
            age: 25,
            follows: ["f05"]
        }
    },
    // List everyone and for each of them, list the names of who they follow and who follows them
    listMembers: function() {
        let users = this.members
        let outputs = []
        for (let user in users) {
            let output = {
                name: "",
                follows: [],
                followsOver30: [],
                followers: [],
                followersOver30: []
            }
            output.name = users[user].name
            output.follows = getNameFromID(users[user].follows)

            output.followers = getFollowersByID(user)
            output.followersOver30 = getFollowersByID(user, true)
            output.followsOver30 = getNameFromID(users[user].follows, true)

            outputs.push(output)
        }
        return outputs
    },
    
    // Identify who follows the most people
    followsTheMost: function() {
        let users = this.members
        let longest = {
            length: 0,
            name: ''
        }
        for (let user in users) {
            if(users[user].follows.length > longest.length) {
                longest.length = users[user].follows.length
                longest.name = users[user].name
            }
        }
        return longest.name
    },
    // Identify who has the most followers
    mostPopular: function() {
        let users = this.listMembers()
        let longest = {
            length: 0,
            name: '',
            follows: []
        }
        for (let user in users) {
            if(users[user].followers.length > longest.length) {
                longest.length = users[user].followers.length
                longest.name = users[user].name
                longest.follows = users[user].follows.length
            } else if (users[user].followers.length === longest.length) {
                if (users[user].followers.length -  users[user].follows.length > longest.length - longest.follows) {
                    longest.length = users[user].followers.length -  users[user].follows.length
                    longest.name = users[user].name
                }
            }
        }
        return longest.name
    },
    mostPopularOver30: function() {
        let users = this.listMembers()
        let longest = {
            length: 0,
            name: '',
        }
        for (let user in users) {
            if(users[user].followersOver30.length > longest.length) {
                longest.length = users[user].followersOver30.length
                longest.name = users[user].name
                longest.follows = users[user].follows.length
            } 
        }
        return longest.name
    }
};
//console.log(data.mostPopular())
//console.log(data.listMembers())
console.log(data.mostPopularOver30())

function getNameFromID(ids, overThirty = false) {
    let names = []
    for (let id of ids) {
        if (overThirty === true) {
            if (data.members[id].age > 30){
                names.push(data.members[id].name)
            }
        } if (overThirty === false) {
            names.push(data.members[id].name)
        }
    }
    return names
}

function getFollowersByID(userID, overThirty = false) {
    let followers = []
    for (let user in data.members) {
        if (data.members[user].follows.includes(userID)) {
            if (overThirty === true) {
                if (data.members[user].age > 30){
                    followers.push(data.members[user].name)
                }
            } if(overThirty === false) {
                followers.push(data.members[user].name)
            }
        }
    }
    return followers
}
function numberOfFollowersover30(userID) {

}

// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)