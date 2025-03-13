alert('Hello World')
//get random month

const randomMonth = () =>{
    const month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return month[Math.floor(Math.random()*12)]
}

//get random weather

const forecast = () =>{
    const weather = ['sunny', 'cloudy', 'rainy', 'humid']
    return weather[Math.floor(Math.random()*4)]
}

//get random day

const randomDay = () =>{
    const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return day[Math.floor(Math.random()*7)]
}

// log weather forecast

const logWeather = () => {
    console.log(`In ${randomMonth} it will be ${forecast} on ${randomDay}`)
}

// add event handler (onclick)
