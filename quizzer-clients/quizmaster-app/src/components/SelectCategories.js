import React from 'react'

import { PageTitle } from "./PageTitle"
import { Categories } from "./Categories"
import Button from "./Button"

export class SelectCategories extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PageTitle title="Select categories" subtitle="Select 3 categories from which you want to get questions" />
                <Categories />
                <Button title="Start round" customClickEvent={() => { return }} />
            </React.Fragment>
        )
    }
}