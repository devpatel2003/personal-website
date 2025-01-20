import React, { Component, useState } from 'react';
import Modal1 from './modals/Model1.js';
import Modal2 from './modals/Model2.js';
import Modal3 from './modals/Model3.js';
import Modal4 from './modals/Model4.js';
import Modal5 from './modals/Model5.js';




export default class Porfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedItem: null,
      modalType: null,
    };
  }

  toggleModal = (item = null, modalType = null) => {
    this.setState({
      showModal: !this.state.showModal,
      selectedItem: item,
      modalType: modalType,
    });
  };

  render() {

    let resumeData = this.props.resumeData;
    const { showModal, selectedItem, modalType } = this.state;


    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects!</h1>
           <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return (
                <div className="columns portfolio-item" key={item.id}>
                  <div className="item-wrap" onClick={() => this.toggleModal(item, item.modalType)}>
                    <img src={item.imgurl} className="item-img" alt={item.name} />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }

          </div>
        </div>
      </div>

      {showModal && modalType === 'modalType1' && selectedItem && (
        <Modal1 show={showModal} onClose={() => this.toggleModal(null)}>
          
        </Modal1>
      )}
      {showModal && modalType === 'modalType2' && selectedItem && (
        <Modal2 show={showModal} onClose={() => this.toggleModal(null)}>
          
        </Modal2>
      )}

      {showModal && modalType === 'modalType3' && selectedItem && (
              <Modal3 show={showModal} onClose={() => this.toggleModal(null)}>
                
              </Modal3>
            )}

      {showModal && modalType === 'modalType4' && selectedItem && (
              <Modal4 show={showModal} onClose={() => this.toggleModal(null)}>
                
              </Modal4>
            )}

      {showModal && modalType === 'modalType5' && selectedItem && (
              <Modal5 show={showModal} onClose={() => this.toggleModal(null)}>
                
              </Modal5>
            )}
      
  </section>
        );

    
   
            
            
           
        
  }
}