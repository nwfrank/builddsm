import React from 'react';
import './listItem.css'

class ListItem extends React.Component {
    render() {
      return (
        <div className='item-holder'>
            <p className='asdf'>Common Names: {this.props.commonNames}</p>
            <p className='asdf'>Active Ingredients: {this.props.activeIng}</p>
            <div className='asdf' dangerouslySetInnerHTML={{__html:this.props.indicators}}/>
            <p className='asdf'>PDF: {this.props.pdf}</p>
            <button>See more</button>
        </div>
      );
    }
  }
  
export default ListItem;