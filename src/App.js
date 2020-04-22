import React, { Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import store from './store/store';
import { Provider } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = React.lazy(() => import('./pages/home/home'));
const Rooms = React.lazy(() => import('./pages/rooms/rooms'));
const SingleRoom = React.lazy(() => import('./pages/single-room/single-room'));
const NotFound = React.lazy(() => import('./pages/not-found/not-found'));

const WaitingComponent = (Component) => {
    return (props) => (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </Suspense>
    )
}

const routes = [
    {
        path: '/home',
        exact: true,
        component: WaitingComponent(Home)
    },
    {
        path: '/rooms',
        exact: true,
        component: WaitingComponent(Rooms),
    },
    {
        path: '/single-room/:id',
        exact: true,
        component: WaitingComponent(SingleRoom)
    },
    {
        path: '/not-found',
        exact: true,
        component: WaitingComponent(NotFound)
    },
    {
        path: '*',
        exact: true,
        component: WaitingComponent(NotFound)
    }         
];

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
            )}
        />
    );
  }

const App = () => {
    useEffect(() => {
        AOS.init()
    });

    return (
        <Provider store={store}>
            <div className="w-full static flex justify-center">
                <div className="max-w-screen-xl w-full">
                    <NavBar />
                    <Switch>
                        {routes.map((route, i) => ( 
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))}
                    </Switch>
                </div>
            </div>
        </Provider>
)}

export default App;