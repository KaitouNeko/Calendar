# React-Calendar
## Quick Start
#### Compatibility
Your project needs to use React 17 or later.
Node 12.7.0
#### Browser Support
- Google Chrome
- Edge
- Firfox
- Internet Explorer11

#### Installation
```
npm install
```

and then navigate to start in your browser.
######To initialize a new app, run:
```
npm run dev
```
and then navigate to start-locahost:9000/  .Preview in your browser.
That's it!
######To build , run:
```
npm run build
```

##API
List all API properties of the Calendar component
#### Calendar Component
|    Name    |        Type        |  Default    |             Description           |
|------------|--------------------|-------------|-----------------------------------|
|    date    |  object or string  |    null     |   'YYYY','YYYY-MM','YYYY-MM-DD'   |

## Props

#### Input Component
|    Name    |  Type      |  Default  |             Description           |
|------------|------------|-----------|-----------------------------------|
|   onKeyUp  |  function  |           |Callback fired when press the enter button the value is update.|


## Function
#### getDateApi
|    Name         |   Type   | Default |             Description           |
|-----------------|----------|---------|-----------------------------------|
|   getYears      | function ||Twelve year range to display in the calendar. It causes the calendar to re-render when its value changes.|
| getMonths       | function ||Twelve month range to display in the calendar.|
| getFirstday     | function ||Get the first day of the month|
| getLastday      | function ||Get the last day of the month|
| getLastMonth    | function ||Get the last month|
| getNextMonth    | function ||Get the next month|
| getLastYear     | function ||Get the last year|
| getNextYear     | function ||Get the next year|
| getCurrentRange | function ||The number of day to render.|
| getLastRange    | function ||Number of days in the previous month|
| getNextRange    | function ||Number of days in the next month|
| tenYearRange  | function ||Function called to get the ten year range|
| nextTenYear   | function ||Function called to get the next ten year range|
| lastTenYear   | function ||Function called to get the previous ten year range|
#### formateDate
|        Name           |   Type   | Default |             Description           |
|-----------------------|----------|---------|-----------------------------------|
| formateDateToObject   | function ||Function called to override default formatting of month and year |
| formateDateToStr      | function ||Function called to Convert date format to 'YYYY-MM-DD'|
| enMonth               | function ||Function called to override default formatting of month and year in the top navigation section.|

#### dateValidationCheck
|    Name       |   Type   | Default |             Description           |
|---------------|----------|---------|-----------------------------------|
| dateValidationCheck | function ||Function call to verify that the date format is correct|