import express from 'express';
import React from 'react';
import createLocation from 'history/lib/createLocation';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext} from 'react-router';
import path from 'path';
import routes from './app/routes';

import AppContainer from './app/components/AppContainer';

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.static(path.resolve(__dirname, 'dist')));

app.use((req, res) => {
    let location = createLocation(req.url);
    match({ routes, location }, (error, redirectLocation, renderProps) => {
        let content = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
        res.render("index", {content: content})
    });
});

const port = process.env.PORT || 3000;
console.log('listening...' + port);
app.listen(port);
