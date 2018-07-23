import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import videoTable from './videoTable';
import addVideo from './addVideo';

class Articles extends Component {
    render(){
        return(
            
            <div>
                <Route path='/admin/videos' exact={true} component={videoTable} />
                <Route path='/admin/videos/addvideos'  component={addVideo} />
            </div>
        )
    }
}
export default Articles;