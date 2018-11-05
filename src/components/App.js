import React, { Component } from 'react';
import {Card} from 'primereact/card';

export default class App extends Component {

  render(){
    const header = <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>;
    const footer = <span>
                    <Button label="Save" icon="pi pi-check" style={{marginRight: '.25em'}}/>
                    <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
                </span>;
    return (
      <div>
        <Card title="Advanced Card" header={header} footer={footer}>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
        </Card>
      </div>
    )
  }
}
 