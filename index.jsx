'use strict';

import {render} from 'react';
import Comparison from './components/comparison'

require('./styles/app.less');

var incomes = [
    {type: 'hourly', rate: 60, employmentType: 'self'},
    {type: 'salary', wage: 80500, employmentType: 'employee'}
];

render(<Comparison incomes={incomes} />, document.getElementById('content'));
