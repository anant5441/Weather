# Weather App

A simple weather application that fetches and displays real-time weather data for a city entered by the user. It provides information such as temperature, humidity, wind speed, and weather conditions using the [OpenWeatherMap API](https://openweathermap.org/).

---

## Features

- Displays **current temperature**, **humidity**, **wind speed**, and **weather condition** of a city.
- Updates dynamically based on user input.
- Changes weather icons based on the current weather condition (e.g., Clear, Clouds, Rain).
- Simple and responsive user interface.

---

## Technologies Used

### Frontend:
- **HTML**: Structure of the web page.
- **CSS**: Styling and layout.
- **JavaScript**: Fetching API data and dynamically updating UI.

### API:
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## Requirements

- A browser supporting modern JavaScript features.
- Internet connection to fetch API data.
- A valid API key from OpenWeatherMap.

---

## Getting Started

### 1. Clone or Download the Repository
```bash
git clone <repository-url>
```
### 2. Navigate to Project Folder
Ensure your terminal or command prompt is in the project folder:
```bash
cd <project-folder-name>
```

---

## Project Structure

```
.
├── index.html       # Main HTML file
├── style.css        # CSS for styling
├── script.js        # JavaScript for API fetching and UI updates
├── images/          # Weather icons used for display
│   ├── clear.png
│   ├── clouds.png
│   ├── drizzle.png
│   ├── humidity.png
│   ├── mist.png
│   ├── rain.png
│   ├── snow.png
│   └── wind.png
└── README.md        # This file
```

---

## How It Works

1. **Search Box**: Enter the city name in the input box and click the search button.
2. **Weather Fetching**:
   - `script.js` uses the `fetch()` method to request weather data for the entered city from OpenWeatherMap API.
   - The API response includes temperature, humidity, wind speed, and weather description.
3. **Dynamic Update**: The weather data updates the following elements:
   - `.city` displays the city name.
   - `.temp` displays the temperature in Celsius.
   - `.humidity` and `.wind` update respective values.
   - `.weather-icon` changes based on the weather condition.

---

## Example OpenWeatherMap API URL

Here's the structure of the API request:
```
https://api.openweathermap.org/data/2.5/weather?units=metric&q={city_name}&appid={your_api_key}
```


---

## Screenshots

![Default Screen](https://github.com/user-attachments/assets/7938eba8-1b49-4d57-8c02-09b8ab32c237)      ![for Delhi](https://github.com/user-attachments/assets/8540d3e8-7e23-4792-96e0-79e1e606c1f8)




---


## Author

- Anant Bhardwaj
- For any queries or improvements, feel free to contact via email.

---

## License

This project is licensed under the MIT License .

--- 

Feel free to reach out for enhancements or additional features!

