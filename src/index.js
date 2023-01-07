import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import counters from './components/counters';
import App from "./app";

const element = <App/>;
render(element);