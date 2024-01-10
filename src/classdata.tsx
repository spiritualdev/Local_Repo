import React from "react";


interface Iprops {

}

interface setstate {
    test : string
}

export default class ShowData extends React.Component<any,setstate,Iprops>{
    
    constructor(props : Iprops)
    {
        super(props)
        this.state = {
            test : "dfh"
        }
    }

    
    showMe = ()=>{
        const temp = this.state;    
        return(
        <h1>{temp.test}</h1>
        );
    }

    
    render() {
        return(
        <>
        <h1>{this.props.data.name} and {this.props.data.age} and {this.props.data.db} and {this.state.test}</h1>
        <this.showMe/>
        </>

        
        
        
        )
    }
}