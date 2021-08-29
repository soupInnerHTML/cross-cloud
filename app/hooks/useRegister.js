import {useState} from 'react';

export default function () {
    return function () {
        const [value, setValue] = useState('');

        return {error, onChangeText: setValue, value};
    };
}
