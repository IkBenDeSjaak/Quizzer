import React from 'react'
import { connect } from 'react-redux'

import { fetchCategories } from '../reducers/categoryReducer'

class CategoriesUI extends React.Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        console.log(this.props.categories)
        return (
            <React.Fragment>
                {this.props.categories.map(category => <div key={category}>{category}</div>)}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
    }
}

export const Categories = connect(mapStateToProps, mapDispatchToProps)(CategoriesUI);