import React from 'react'


class Banner extends React.Component{

    state = {
        name:"Banner asdfasdf"
    }

    onClick(){
        this.setState({
            name:"NEW Name"
        })
    }

    componentDidMount(){
        console.log("MOUNTED from Banner component");
    }

    render(){
        return (
            <>
            <h1>BANNER COMPONENT IS HERE!</h1>
            <p className="">{ this.state.name }</p>

            <button  onClick={this.onClick}>CLICK</button>
            
            </>
        )
    }
}

export default Banner;
