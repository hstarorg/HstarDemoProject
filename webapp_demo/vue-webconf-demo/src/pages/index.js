import App from './app/App';

// import Home from './home/Home';
// import About from './about/About';
// import Layout from './layout/Layout';
// import NotFound from './notfound/NotFound';


const Layout = () => import('./layout/Layout');
const Home = () => import('./home/Home');
const About = () => import('./about/About');
const NotFound = () => import('./notfound/NotFound');

export {
  App,
  Home,
  About,
  NotFound,
  Layout
};
