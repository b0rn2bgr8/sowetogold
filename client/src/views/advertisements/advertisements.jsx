import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import addArdvertisements from './addArdvertisements';
import advertisementsTable from './advertisementsTable';

class Advertisements extends Component {
    render(){
        return(
            <div>
                <Route path='/admin/manage_advertisements' exact={true} component={advertisementsTable} />
                <Route path='/admin/manage_advertisements/addadvertisements'  component={addArdvertisements} />
            </div>
        )
    }
}

export default Advertisements;