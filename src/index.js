import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import counters from './components/counters';
import App from "./app";

//here you put the app component as the one holding all the other child component
const element = <App/>;
render(element);