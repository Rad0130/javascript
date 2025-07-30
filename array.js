const friends=['rad', 'gadd', 'chad', 'daad']

console.log(friends[2])


console.log(friends.shift())

friends.unshift('chauhd', 'uhusbf', 'zuhsdhf', 'iysd')

console.log(friends)


if(friends.includes('chad')){
    console.log('it exists')
}

else{
    console.log('it does not exist')
}


for(const name of friends){
    console.log(name)
}

console.log(Array.isArray(friends))
