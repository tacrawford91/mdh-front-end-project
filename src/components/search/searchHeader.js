import React from 'react';

import SearchInput from 'react-search-input';


class SearchHeader extends React.Component {
    render() {
        return (
            <div>
                <div className='searchWrapper'>
                    <div className='infoShowDiv'>
                        <h3>Select Locations</h3>
                        <button className='btn addBtn' onClick={() => this.props.showInfo()}>Add</button>
                        <button className='btn cancelBtn' onClick={() => this.props.hideInfo()}>Cancel</button>
                    </div>
                    <br />
                    <SearchInput className="search-input" onChange={(term) => this.props.searchHandler(term)} />
                    <div className='selectDiv'>
                        <p>Show Selected</p>({this.props.selected.length})
                        <p onClick={() => this.props.selectAll()}>Select All</p> / <p onClick={() => this.props.deSelectAll()}>  Deselect All</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchHeader