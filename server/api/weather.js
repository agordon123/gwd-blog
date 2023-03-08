
export default defineEventHandler(async (event) =>
{
    return await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`)
})
