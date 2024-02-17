import React, { useState } from 'react';
import './listItem.css';


class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expand: 'none',
            extras: 'See More'
        }
    }

    render() {

    const toggle = () => {
        if (this.state.expand == 'none'){
            this.setState({expand: 'block'});
            this.setState({extras: 'See Less'});
        }
        else {
            this.setState({expand: 'none'});
            this.setState({extras: 'See More'});
        }
    }

    const pdfUrl = 'https://animaldrugsatfda.fda.gov/adafda/app/search/public/document/downloadBBL/'+ this.props.pdf;

      return (
        <div className='item-holder'>
            <p className='asdf'>Common Names: {this.props.commonNames}</p>
            <p className='asdf'>Active Ingredients: {this.props.activeIng}</p>
            <div className='asdf' dangerouslySetInnerHTML={{__html:this.props.indicators}}/>
            <p className='asdf' target="_blank" rel="noopener noreferrer">PDF: <a href={pdfUrl}>See</a></p>
            <p className='asdf' style={{display: this.state.expand}}>Animal Class: {this.props.animalClass}</p>
            <p className='asdf' style={{display: this.state.expand}}>Status: {this.props.status}</p>
            <p className='asdf' style={{display: this.state.expand}}>Application Number: {this.props.applicationNumber}</p>
            <p className='asdf' style={{display: this.state.expand}}>Label Type: {this.props.labelType}</p>
            <button onClick={toggle}>{this.state.extras}</button>
        </div>
      );
    }
  }

  
export default ListItem;