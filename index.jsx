'use strict';

import {render} from 'react';
import Comparison from './components/comparison'

require('./styles/app.less');

var incomes = [
    {type: 'hourly', rate: 60},
    {type: 'salary', wage: 80500}
];

render(<Comparison incomes={incomes} />, document.getElementById('content'));
