# 4.0 Fetching Movies from API
## Axios
- A little layer on the fetch
- Install axios
    ~~~ zsh
    npm i axios
    ~~~
- Fetch data from specific URL
    - Because axios.get() method is very slow, we should code asynd and await.
    ~~~ js
    getData = async () => {
        const data = await axios.get( url )
    }
    ~~~