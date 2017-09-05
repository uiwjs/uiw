import React from 'react'

class Loading extends React.Component{
    render(){
        return(
            <div>
                loading....
            </div>
        )
    }
}

export default class Bundle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: Loading
        });
        props.load((mod) => {
            // let MOD = React.createElement(mod.default ? mod.default : mod, {
            //   locale: {
            //     show: getLang('markdown.show'),
            //     hide: getLang('markdown.hide')
            //   }
            // });
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }
    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null;
    }
}
