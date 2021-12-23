import { connect } from "react-redux";
import { compose } from "redux";
import { SetProductAC, SetPriceAC, SetNameAC, SetCommentAC, AddNewReportAC  } from './../../Redux/BuyurtmalarReduser';
import Buyurtmalar from "./Buyurtmalar";
let mapsStateToProps=(state)=>{
  return{ 
    addNewName:state.buyurtma.addNewName,
    addNewProduct:state.buyurtma.addNewProduct,
    addNewPrice:state.buyurtma.addNewPrice,
    addNewComment:state.buyurtma.addNewComment,
    report:state.buyurtma.report,
    isAuth: state.login.isAuth
  }}
  export default compose( connect(mapsStateToProps, {SetNameAC, SetProductAC, SetPriceAC, SetCommentAC, AddNewReportAC}) )(Buyurtmalar)
