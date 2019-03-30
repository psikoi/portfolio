import React, { Component } from 'react'
import Select from 'react-select'

export class Selector extends Component {

    options = [
        { value: 'all', label: 'ALL PROJECTS' },
        { value: 'open-source', label: 'OPEN SOURCE' },
        { value: 'personal', label: 'PERSONAL' }
    ]

    style = {
        control: styles => ({
            ...styles,
            fontSize: '12px',
            fontWeight: '700',
            border: '1px solid #2d2d2d',
            boxShadow: 'none',
        }),
        option: styles => ({
            ...styles,
            fontSize: '12px'
        }),
    }

    containerStyle = {
        display: 'inline-block',
        width: '160px',
        float: 'right'
    }

    render() {
        return (
            <div style={this.containerStyle}>
                <Select
                    defaultValue={this.options[0]}
                    options={this.options}
                    styles={this.style} />
            </div>
        )
    }
}

export default Selector
