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
    let badHalfDay = weather.filter((v) => {
        return v === 'rainy' || v === 'thunderstorms'
    })
    if (badHalfDay.length === 0) {
        console.log('All good days')
        return 0
    }
    if (badHalfDay.length === weather.length) {
        console.log('All bad days')
        return 1
    }

    let takeUmbrellaGoCompany = 0;
    let takeUmbrellaGoHome = 0;
    for (let i = 0; i <= weather.length; i++) {
        if (i % 2 === 0) {
            if (weather[i] === 'rainy' || weather[i] === 'thunderstorms') {
                if (takeUmbrellaGoHome === 0) {
                    takeUmbrellaGoCompany++
                }else{
                  takeUmbrellaGoHome--
                  takeUmbrellaGoCompany++
                }
            }
        } else {
            if (weather[i] === 'rainy' || weather[i] === 'thunderstorms') {
                if (takeUmbrellaGoCompany === 0) {
                    takeUmbrellaGoHome++
                }else{
                  takeUmbrellaGoCompany--
                  takeUmbrellaGoHome++
                }
            }
        }
    }
    return takeUmbrellaGoCompany + takeUmbrellaGoHome
}



minUmbrellas(['sunny', 'sunny', 'cloudy', 'cloudy', 'rainy', 'cloudy', 'rainy', 'clear', 'sunny', 'thunderstorms'])
//["rainy", "clear", "thunderstorms", "cloudy"]
//["clear"]
// ['sunny', 'thunderstorms', 'windy', 'thunderstorms', 'sunny', 'rainy', 'clear', 'sunny', 'thunderstorms', 'windy']
//['sunny','sunny','cloudy','cloudy','rainy','cloudy','rainy','clear','sunny','thunderstorms' ]
