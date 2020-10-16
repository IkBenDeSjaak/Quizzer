import React from 'react'

import { PageTitle } from "./PageTitle"
import { TeamsApplications } from "./TeamsApplications"
import Button from "./Button"

export class ApproveTeams extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PageTitle title="New quiz" subtitle="Approve or disapprove incoming teams from participating in the quiz" />
                <TeamsApplications />
                <Button title="Start quiz" customClickEvent={() => { return }} />
            </React.Fragment>
        )
    }
}