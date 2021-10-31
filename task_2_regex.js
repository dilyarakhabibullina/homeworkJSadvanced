const text = "'We're all mad here.I'm mad.You're mad.' 'Only a few find the way, some don't recognize it when they do – some… don't ever want to.'";

const regex = /\B'|'\B/g;
console.log(text.replace(regex, "\""))



