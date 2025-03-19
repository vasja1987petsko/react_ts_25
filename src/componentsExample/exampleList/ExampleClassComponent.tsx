import React, { Component} from "react";

interface IState {
    count: number;
}

class ExampleClassComponent extends Component<any, IState> {
    // constructor(props: any) {
    //     console.log('constructor');
    //     super(props);
    //     this.state = {
    //         count: 0,
    //     }
    // }
    state = {
        count: 0,
    }

    componentDidMount() {
        console.log('componentDidmount');
        console.log('state:', this.state);
        console.log('props:', this.props);
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<IState>, nextContext: any): boolean {
        console.log('shouldComponentUpdate');
        console.log(' nextProps:',  nextProps);
        console.log('props:', this.props);
        console.log('nextState', nextState);
        console.log('state:', this.state);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<IState>): any {
        console.log('getSnapshotBeforeUpdate');
        return {
            state: this.state
        }
    }

    componentDidUpdate(prevProps: any, prevState: IState, snapshot: any) {
        console.log('componentDidUpdate');
        console.log(' prevState:',  prevState);
        console.log('state:', this.state);
        console.log('prevProps:', prevProps);
        console.log('props:', this.props);
        console.log('snapshot:', snapshot);
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(Error)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        console.log('render');
        return(
            <div style={{border: "solid 1px black"}}>
                <div>ExampleClassComponent</div>
                <div> кількість кліків: {this.state.count} </div>
                <button onClick={this.handleClick}>
                    click me
                </button>
            </div>
        )
    }
}

export default ExampleClassComponent;