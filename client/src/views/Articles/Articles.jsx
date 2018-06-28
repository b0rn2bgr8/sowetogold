import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import ArticleTable from './ArticleTable';
import addArticles from './addArticles';

class Articles extends Component {
    render(){
        return(
            <div>
                
                <Route path='/admin/articles' exact={true} component={ArticleTable} />
                <Route path='/admin/articles/addarticle'  component={addArticles} />
            </div>
        )
    }
}

export default Articles;