import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import AddSlide from './AddSlide';
import slidesTable from './slidesTable';

class Slides extends Component {
    render(){
        return(
            <div>
                <Route path='/admin/slide' exact={true} component={slidesTable} />
                <Route path='/admin/slide/addslide'  component={AddSlide} />
            </div>
        )
    }
}
export default Slides;