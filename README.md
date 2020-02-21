# ipl-stats

This web app analyses IPL data from 2008 to 2016 to know various trivia and stats about IPL. Backend for this app can be found [here](https://github.com/Vineet-Sharma29/iplStatsBackend)

# Tech Stack
> frontend
* VueJS
* ChartJS

> Backend
* Django
* Postgres

# Challenges Faced

* Data was difficult to handle with. 
  * There were some entries which looked blank but had white spaces.
  * Some integer fields had string NULL values.
  * There were also some fields which were foreign key but had blank value
  * Data was large(approx ~150K) rows due to which database addition through Django ORM was time taking process
* Choosing right type of graph
* Analysis involved using complex queries using Django ORM

# Code Structure

* A modular, component based approach is used
* Components are reused as much as possible
* Graph are modularized as separate components
* `api` folder separately encapsulates apis used in the project


# Screenshot

![screenshot](https://github.com/Vineet-Sharma29/ipl-stats/blob/master/screenshot.png)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```
