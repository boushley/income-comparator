'use strict';

import {render} from 'react';
import HelloMessage from './components/hello'

render(<HelloMessage name="John" />, document.getElementById('content'));
