import React, { Component, useState } from 'react';
import Modal1 from './modals/Model1.js';
import Modal2 from './modals/Model2.js';
import Modal3 from './modals/Model3.js';
import Modal4 from './modals/Model4.js';




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
  </section>
        );

    
    return (
      <section id="portfolio">
        {/* ... other markup */}
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {resumeData.portfolio && resumeData.portfolio.map((item) => {
            return (
              <div key={item.id} onClick={() => this.toggleModal(item)}>
                <img src={item.imgurl} className="item-img" alt={item.name} />
                {/* ... other item details */}
              </div>
            );
          })}
        </div>
        {selectedItem && (
          <Modal1 show={showModal} onClose={() => this.toggleModal(null)}>
            <h5>{selectedItem.name}</h5>
            <p>{selectedItem.description}</p>
            {/* Any other project details */}
          </Modal1>
        )}
      </section>
    );
  

    
    

    /*
    return (

      
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects!</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((selectedItem)=>{
              return(
                

                /*

                <div>
                <img src={`${selectedItem.imgurl}`} className="item-img"/>
                <Modal1 show={showModal} onClose={() => this.toggleModal(null)}>
                  <h5>{selectedItem.name}</h5>
                  <p>{selectedItem.description}</p>
                  
                </Modal1>
              </div>

                
              
              


                
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={Project1}>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                */
                
                
              //)
            //})
          /*}
              </div>
            </div>
          </div>
      </section>
            );
            */
            
            
           
        
  }
}