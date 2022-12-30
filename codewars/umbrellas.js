//A Man and his Umbrellas

// Without umbrella:
// "clear",
// "sunny",
// "cloudy",
// "overcast",
// "windy".

// With umbrella:
// "rainy",
// "thunderstorms".
//輸入一個陣列，arr[奇數是早上], arr[偶數是下午], [sunny, sunny] -> 一天天氣

function minUmbrellas(weather) {
    let newWeather = weather.map((v, i) => {
        return { weather: v, index: i }
    })
    let sameBadDay = newWeather.filter((v) => {
        return v.weather === 'rainy' || v.weather === 'thunderstorms'
    })
    let newMap = sameBadDay.map((v,i)=>{
        return v.index
    })

    //上午下午 index+1 的一支傘
    let reCount = newMap.filter((v,i,arr)=>{
      return v+1 === arr[i+1]
    })
    console.log(reCount.length)
    
    //偶數奇數
    let even = [];
    let odd = [];
    newMap.forEach((num) => {
        if (Math.abs(num % 2) === 0) {
            even.push(num)
        } else {
            odd.push(num)
        }
    })
    console.log(even, odd)
    // return (even.length > odd.length) ? odd[0] : even[0]

    if (sameBadDay.length === 0) {
        return 0
    }
    if (sameBadDay.length === weather.length) {
        return 1
    }

    return sameBadDay.length - reCount.length

}

minUmbrellas(['sunny','thunderstorms','windy','thunderstorms','sunny','rainy','clear','sunny','thunderstorms','windy' ])
//["rainy", "clear", "thunderstorms", "cloudy"]
//["clear"]