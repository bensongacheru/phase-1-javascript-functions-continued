function saturdayFun(actvity = 'roller-skate') {
    return `This Saturday, I want to ${actvity}!`
    
}

function mondayWork(work = 'go to the office') {
    
    return `This Monday, I will ${work}.`
}

function wrapAdjective(visual_flare = "*") {
    return function wraps(okay = 'special'){
       return `You are ${visual_flare}${okay}${visual_flare}!`
       const encouragingPromptFunction = wrapAdjective("!!!")
    }
}
console.log(wrapAdjective("*")());