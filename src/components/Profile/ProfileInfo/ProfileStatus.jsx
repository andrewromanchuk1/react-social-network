import React from 'react';
import ProInfoCSS from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status
   }
   activateMode = () => {
      this.setState({
         editMode: true
      })
   }
   deactivateMode = () => {
      this.setState({
         editMode: false
      })
      this.props.updateStatusThunkCreator(this.state.status)
   }
   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      })
      
   }
   componentDidUpdate(prevProps) {
      if(prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }
   render() {
      return  (
         <div>
            {this.state.editMode ? <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateMode}
            value={this.state.status}></input> :
            <p onDoubleClick={this.activateMode}
             className={ProInfoCSS.profile__about}>{this.props.status || 'no status'}</p>}
         </div>
      )
   }
   
}

export default ProfileStatus;