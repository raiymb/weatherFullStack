# **Derbes Weather**
## Introduction
Derbes is a full-stack web application providing real-time weather updates, city-specific information, and related news articles.APIs from OpenWeatherMap, Wikipedia, and GNews.
## Features
Current Weather Data: Access real-time weather information for any city.
City Information: Fetch city-specific information from Wikipedia.
News Feed: Read news articles related to the searched city.
Responsive Design: Compatible with various devices and screen sizes.
## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download)

- npm (comes with Node.js)
### Installation
 - **Clone the repository**
```
git clone https://github.com/raiymb/weatherFullStack.git

cd weatherFullStack
```
 - **Install dependencies**
```
cd client

npm install
```
после установок зависимости react части, надо скачать зависимости node.js 
```
cd -
cd server
npm install
```
 - **Environment Setup**
inside my env, you can use your:
```
WEATHER_API_TOKEN=<Your_OpenWeatherMap_API_Key>

GNEWS_API_KEY=<Your_GNews_API_Key>
```
 - **Run the application**
```
cd client

npm run build
```
then 
```
npm start
```
 - **Access the Application**

The app will be available at http://localhost:3000.

