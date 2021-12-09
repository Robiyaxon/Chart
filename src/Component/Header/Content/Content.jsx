import React from 'react'
import { Route } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import ContentTitle from './../../Title/ContentTitle'
import style from "../../Title/Title.module.css"
import { Diagramma } from '../../Home/Diagramma'
export function Content(classes, open) {
  let a =open  ? style.dNone : null
  return (
    <React.Fragment >
    <main className={ a + " " + classes.content }  >
      <div className={classes.toolbar} />
      <div>
        <ContentTitle />
        <Route path='/Chart' exact render={() => <Diagramma />} />
      </div>
      <Typography paragraph>
      </Typography>
    </main>
    </React.Fragment>
  )
}
