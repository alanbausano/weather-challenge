## Weather App

### Description:

#### This project is a Weather App built using mainly React, among other libraries. It allows users to search for a city and view detailed weather information. In the details page the user can see a 3 day forecast of the selected city. Users can also add cities to their favorites, view them on a separate page and will persist even if the page is reloaded. It uses the rapidapi and the weatherAPI to gather real information.

#### [Live demo](https://weather-challenge-app.netlify.app/)

## Technologies

- React
- Vite
- Material-UI
- Axios
- @tanstack/react-query
- React Router
- use-debounce
- Testing: @testing-library/react, vitest

## To run locally:

#### Clone the project to your local environment. HTTPS Example:

```
git clone https://github.com/alanbausano/weather-challenge.git
```

#### Install dependencies:

```
npm install
```

#### Before initializing the app, you'll need to create an .env file in the root file of the project (there's an .env-example file for you to copy), to provide the weatherAPI key.

#### Go to the [rapidapi webpage](https://rapidapi.com/weatherapi/api/weatherapi-com/playground/apiendpoint_bef542ef-a177-4633-aacc-ee9703945037) (this URL already points to the utilized weatherAPI), where you'll need to sign up with any account in order to get an API key to use in the app.

##### Before signing up, selecting JavaScript you'll see a Code Snippet with headers like this:

```
xhr.setRequestHeader('x-rapidapi-key', 'Sign Up for Key');
xhr.setRequestHeader('x-rapidapi-host', 'weatherapi-com.p.rapidapi.com');
```

#### Once signed up, the request will have your corresponding API key:

```
xhr.setRequestHeader('x-rapidapi-key', 'example-api-key-f2169c51');
xhr.setRequestHeader('x-rapidapi-host', 'weatherapi-com.p.rapidapi.com');
```

#### You then, can paste the provided API key in the VITE_WEATHER_API_KEY variable, in the .env file you previously created. This will take care of the corresponding headers of the requests to the weatherAPI.

#### Finally you can initialize the app from the terminal:

#### If you created a parent file:

```
cd weather-challenge
```

#### Else you can just:

```
npm run dev
```

#### And go to the localhost to use it.

## Tests

#### To see tests coverage of the app, from the terminal you can run:

```
npm run coverage
```
