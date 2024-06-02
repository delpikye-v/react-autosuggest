<div align="center">
    <h1>react-autosuggest-z</h1>
    <a href="https://www.npmjs.com/package/react-autosuggest-z">react-autosuggest-z</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a></b>
</div>

## Desription
+ React hook: autosuggest
+ Support: fetchApi/basic
+ Single selection
---

## Preview
![React-Autosuggest](https://github.com/delpikye-v/react-autosuggest/blob/main/preview.png)

## Installation

Install via npm:
```
npm i react-autosuggest-z
```

## Usage

To use react-autosuggest-z in your react project.

### basic: object
```js
    import 'react-autosuggest-z/build/styles.css';
    import Autosuggest from 'react-autosuggest-z';

    <Autocomplete
        listSuggest={[
            {
                name: 'abcd',
                value: '1234',
            },
            {
                name: 'abce',
                value: '1235',
            },
            {
                name: 'abcf',
                value: '1235',
            },
        ]}
        displayName={'name'}
        valueName={'value'}
    />
```

### basic: array
```js
    import 'react-autosuggest-z/build/styles.css';
    import Autosuggest from 'react-autosuggest-z';

    <Autocomplete
        listSuggest={[0, 1, 2, 3, 4, 5, 6]}
    />
```

### async
```js
    import Autosuggest from 'react-autosuggest-z';

    const fetchInfo = useFetchPlaceholder();

    <Autosuggest
        {...fetchInfo}
    />

    // hook file
    // sample with search data
    import { useCallback, useState } from 'react';
    import _ from 'lodash';

    const minSizeSearch = 4;
    export const useFetchPlaceholder = () => {
        const [listData, setListData] = useState<any[]>([]);
        const [isLoading, setLoading] = useState(false);
        const [value, setValue] = useState('');

        // sample
        const fetchingData = () => {
            setListData([]);

            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setListData(json.filter(item => itme.abc.includes(value)));
                setLoading(false);
            })
            .catch(() => {
                setListData([]);
                setLoading(false);
            });
        };

        const searchUsers = useCallback(
            _.debounce(() => fetchingData(), 1000),
            [value],
        );

        return {
            listSuggest: listData,
            isLoading,
            placeholder: 'Please enter the name',
            hasAsync: true,
            displayName: 'name',
            valueName: 'id',
            minSizeSearch,
            setText: (newValue: string) => {
                setValue(newValue);
                if (newValue.trim().length < minSizeSearch) {
                    setListData([]);
                    setLoading(false);
                    return;
                }

                if (newValue.trim() !== value.trim()) {
                    setLoading(true);
                    searchUsers(newValue);
                }
            },
            handleSelection: (item: any) => {
                // setListData([]);
                // cancel request in hear....
                setLoading(false);
            },
            handleOutSideClick: () => {
                // cancel request in hear....
                setLoading(false);
            },
            handleIconSearchClick: () => {
                // cancel request in hear....
                setLoading(true);
                fetchingData();
            },
        };
    };
```
## Props

+ see <b>index.d.ts</b>
+ version: testing

| props                        | type                                  | description / default                                                      |
|------------------------------|---------------------------------------|----------------------------------------------------------------------------|
| id?                          | string                                |                                                                            |
| displayName?                 | string                                |                                                                            |
| valueName?                   | string                                |                                                                            |
| className?                   | string                                |                                                                            |
| listSuggest?                 | array                                 |  IObjectProps[] / any[]                                                    |
| placeholder?                 | string                                |  `Please enter the name`                                                   |
| messageNoData?               | string                                |  Search for messages without data                                          |
| maxLength?                   | number                                |                                                                            |
| text?                        | string                                |                                                                            |
| closeOnSelected?             | boolean                               |  `true`                                                                    |
| closeOnEsc?                  | boolean                               |  `false`                                                                   |
| matchCompareCase?            | boolean                               |  `true`: ignoreCase if search basic                                        |
| disabled?                    | boolean                               |                                                                            |
| minSizeSearch?               | number                                |   `min character search with api`   (1)                                    |
| hideSearchIcon?              | boolean                               |   `false`                                                                  |
| titleSearchIcon?             | string                                |   `tip-icon`                                                               |
| titleClearIcon?              | string                                |   `tip-icon`                                                               |
| getInputRefs?                | Function                              |  (ref: React.MutableRefObject<HTMLInputElement>) => any: searchBox         |
| // async                     |                                       |                                                                            |
| isLoading?                   | boolean                               |  `false`: loading api                                                      |
| hasAsync?                    | boolean                               |  `false`: set true if use api                                              |
| setText?                     | Function                              |  (value: string) => any                                                    |
| handleSelection?             | Function                              |  (item: any) => any                                                        |
| handleOutSideClick?          | Function                              |  () => any                                                                 |
| handleIconSearchClick?       | Function                              |  () => any                                                                 |

## License
MIT
