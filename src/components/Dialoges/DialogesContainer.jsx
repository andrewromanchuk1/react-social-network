import { connect } from 'react-redux';
import { addMessageActionCreator } from '../../redux/dialoges-reducer';
import Dialoges from './Dialoges';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux';


let mapStateToProps = (state) => {
   return {
      messagePage: state.messagePage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      onAddMessage: (messageBody) => {
         dispatch(addMessageActionCreator(messageBody));
      }
   }  
}

const DialogesContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialoges) ;

export default DialogesContainer;