import React from 'react';

import Checkbox from './checkbox';
import stateFullName from '../../stateFullName.json';


class CheckboxWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            selectAll: 0,
            checked: [...new Set(this.props.selected.filter((location) => location.state === this.props.stateName).map(location => location.id))]
        })
    }
    allSelected = () => {
        if (!this.props.allSelected) {
            this.props.selectAll();
            this.setState({
                selectAll: 0,
                checked: [0]
                // checked: [...new Set(this.props.selected.filter((location) => location.state === this.props.stateName).map(location => location.id))]
            })
        }
        if (this.props.allSelected) {
            this.props.deSelectAll();
            this.setState({
                selectAll: 1,
                checked: [...new Set(this.props.locations.filter((location) => location.state === this.props.stateName).map(location => location.id))]
            })
            this.state.checked.forEach((location) => this.checkUpdater(location))
        }
    }
    selectAllToggle = (stateName) => {
        if (this.state.selectAll) {
            this.setState({
                selectAll: 0,
                checked: []
            });
            this.props.stateDeSelectAll(stateName);
        } else {
            this.setState({
                selectAll: 1,
                checked: [...this.props.localLocations.map((showLocation) => showLocation.id)]
            })
            this.props.stateSelectAll(stateName);
        }
    }
    checkUpdater = (localStoreID) => {
        if (!this.state.checked.includes(localStoreID)) {
            let current = this.state.checked;
            current.push(localStoreID);
            this.setState({ checked: [...current] });
            this.props.toggleLocation(localStoreID);
        } else {
            this.setState({ checked: this.state.checked.filter((item) => item !== localStoreID) });
            this.props.toggleLocation(localStoreID);
        }
    }
    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.allSelected !== prevProps.allSelected && this.props.allSelected) {
    //         this.setState({
    //             selectAll: !this.state.selectAll,
    //             checked: [...new Set(this.props.selected.filter((location) => location.state === this.props.stateName).map(location => location.id))]

    //         });
    //         this.props.selectAll();
    //         this.render();
    //     } else if (this.props.allSelected !== prevProps.allSelected && !this.props.allSelected) {
    //         this.props.deSelectAll();
    //         this.setState({
    //             selectAll: !this.state.selectAll,
    //             checked: [...new Set(this.props.selected.filter((location) => location.state !== this.props.stateName).map(location => location.id))]
    //         });
            
    //         this.render();
    //     } 

    //     //issues - state select all then deselect all does not re-render checkboxs
    // }
        componentDidUpdate(prevProps, prevState) {
        if (this.props.allSelected !== prevProps.allSelected && this.props.allSelected) {
            this.setState({
                selectAll: 1,
                checked: [...new Set(this.props.locations.filter((location) => location.state === this.props.stateName).map(location => location.id))]

            });
            this.props.selectAll();
            // this.render();
        } else if (this.props.allSelected !== prevProps.allSelected && !this.props.allSelected) {
            this.props.deSelectAll();
            this.setState({
                selectAll: 0,
                checked: [0]
            });
        } 
        // else if (this.props.allSelected === prevProps.allSelected && !this.props.allSelected && prevState.selectAll !== this.state.selectAll && !this.state.checked ) {
        //         this.props.deSelectAll();
        //         this.setState({
        //             selectAll: 0,
        //             checked: [0]
        //         });

            // this.render();
        // } 

        //issues - state select all then deselect all does not re-render checkboxs
    }

    checkChangeHandler = (localStoreId) => {
    }


    render() {
        return (
            <div className='stateContainer'>
                <div className='stateHeader'>
                    <h3>{stateFullName[this.props.stateName]} </h3>
                    <p onClick={() => this.selectAllToggle(this.props.stateName)}>
                        {(this.state.selectAll) ? 'Deselect All' : 'Select All'}
                    </p>
                </div>
                <div className='stateContent'>
                    {this.props.localLocations.map((showLocation) => {
                        return    (
                                <Checkbox
                                    checkChangeHandler={ this.checkChangeHandler }
                                    checked={ this.state.checked.includes(showLocation.id ) }
                                    checkUpdater={ this.checkUpdater }
                                    id={ showLocation.id }
                                    key={ showLocation.id }
                                    localStore={ showLocation }
                                />
                            )
                    }
                )}
                </div>
            </div>
        )
    }
}


export default CheckboxWrapper;
