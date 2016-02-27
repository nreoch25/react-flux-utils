import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from './components/AppContainer';
import Index from './components/Index';
import ContentList from './components/content/ContentList';
import Story from './components/content/Story';
import NotFound from './components/NotFound';

export default (
    <Route path='/' component={AppContainer}>
        <IndexRoute component={Index} />
        <Route path="arts" section="Arts" component={ContentList} />
        <Route path="news" section="News" component={ContentList} />
        <Route path="sports" section="Sports" component={ContentList} />
        <Route path="arts/:id" component={Story} />
        <Route path="news/:id" component={Story} />
        <Route path="sports/:id" component={Story} />
        <Route path="*" component={NotFound} />
    </Route>
);
