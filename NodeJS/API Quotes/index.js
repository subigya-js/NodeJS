const quotes = document.getElementById("quotes")
const author = document.getElementById("author")
let realData = ""

const getNewQuotes = () => {
    let randomNum = Math.floor(Math.random() * (10 - 0 + 1) + 0)

    console.log(randomNum)

    quotes.innerText = `${realData[randomNum].text}`
    author.innerText = `${realData[randomNum].author}`
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes"

    try {
        let data = await fetch(api)
        realData = await data.json()

        console.log(api.length)

        getNewQuotes()
    }

    catch (error) {

    }
}

getQuotes()