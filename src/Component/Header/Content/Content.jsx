import React from 'react'
import { Route } from 'react-router-dom'
import ContentTitle from './../../Title/ContentTitle'
import style from "../../Title/Title.module.css"
import { Diagramma } from '../../Home/Diagramma'
import BuyurtmalarComponent from '../../Buyurtmalar/BuyurtmalarComponent'
import KassaContainer from '../../Kassa/KassaContainer'
export function Content(classes, open) {
  let a =open  ? style.dNone : null
  return (
    <React.Fragment >
    <main className={ a + " " + classes.content }  >
      <div className={classes.toolbar} />
      <div>
        <ContentTitle />
        <Route path='/Chart' exact render={() => <Diagramma />} />
        <Route path='/buyurtmalar' exact render={() => <BuyurtmalarComponent/>} />
        <Route path='/kassa' exact render={() => <KassaContainer />} />
      </div>
    </main>
    </React.Fragment>
  )
}
