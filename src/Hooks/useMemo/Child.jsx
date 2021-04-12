import React,{PureComponent} from 'react'

class Child extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <div>
                random number: {Math.random()}
            </div>
         );
    }
}
 
export default Child;