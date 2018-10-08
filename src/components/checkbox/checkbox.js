import React from 'react';

class Checkbox extends React.Component {
    // componentDidMount() {
    //     if(this.props.allSelected) {
    //         this.props.checkUpdater(this.props.localStore.id);
    //     }
    // }

    // componentWillUpdate(prevProps) {
    //     if (prevProps.allSelected !== this.props.allSelected) {
    //         this.props.checkUpdater(this.props.localStore.id);
    //     }
    // }
    render() {
        return (
            <label className='stateCheckbox'>
                <input type='checkbox'
                    checked={!!this.props.checked} onClick={() => this.props.checkUpdater(this.props.localStore.id)}
                    onChange={() => this.props.checkChangeHandler(this.props.localStore.id)}
                /> {this.props.localStore.name.replace(/7-Eleven/, '')}
                <span className="checkmark"></span>
                <h6>{`${this.props.localStore.city}, ${this.props.localStore.state}`}</h6>
            </label>
        )
    }
}


export default Checkbox;