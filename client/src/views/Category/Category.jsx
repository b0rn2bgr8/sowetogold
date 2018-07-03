import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import CategoryTable from './categoryTable';
import addCategory from './addCategory';

class Articles extends Component {
    render(){
        return(
            <div>
                <Route path='/admin/manage_category' exact={true} component={CategoryTable} />
                <Route path='/admin/manage_category/addcategory'  component={addCategory} />
            </div>
        )
    }
}
export default Articles;