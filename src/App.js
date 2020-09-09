import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Members from './components/Members';
import Contact from './components/Contact';
import Aurora from './components/Aurora';
import Gallery from './components/Gallery';
import PhotoGallery from './components/PhotoGallery';
import VideoGallery from './components/VideoGallery';
import Alumni from './components/Alumni';
import ScrollToTop from './utils/ScrollToTop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render(){ 
    return (
    <Router>
      <ScrollToTop/>
        <div className="App">
            <Navbar/>
            <Switch>           
                <Route path="/about" exact component={About}></Route>
                <Route path="/members" exact component={Members}></Route>
                <Route path="/members/alumni" exact component={Alumni}></Route>
                <Route path="/gallery" exact component={Gallery}></Route>
                <Route path="/gallery/videos" exact component={VideoGallery}></Route>
                <Route path="/gallery/photos" exact component={PhotoGallery}></Route>
                <Route path="/gallery/photos/:mode" exact component={PhotoGallery}></Route>
                {/* <Route path="/gallery/photos/fests" exact component={Gallery}></Route>
                <Route path="/gallery/photos/category" exact component={Gallery}></Route> */}
                {/* <Route path="/members/:id"  component={About}></Route> Future implementation */} 
                <Route path="/aurora" exact component={Aurora}></Route>
                <Route path="/contact" exact component={Contact}></Route>
                <Route path="/"  exact component={Home}></Route>
            </Switch>
            <footer className="footer">
            <div className="copy-right_text">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 mt-30">
                            <p className="copy_right text-center wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                            Website crafted with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://yagneshlp.me" target="_blank">YLP</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    </Router>
    )
  }
}


export default App;
