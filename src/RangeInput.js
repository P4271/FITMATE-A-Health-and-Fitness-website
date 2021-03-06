import React from 'react'

function tickmarks(min, max, step){
    const ticks = []
    while (min <= max+.1) {
        ticks.push(parseFloat(min.toFixed(1)))
        
        min = parseFloat(min) + parseFloat(step)
    }
    return ticks
}

export default function RangeInput(props) {
    const ticks = tickmarks(props.min, props.max, props.step)

    return (
        <div className="form-group">
            <div className="row">
                <div className="col-xs-9">
                    <label htmlFor={props.name}>
                        {props.label}
                        {
                            props.labelSmall
                            &&
                            <small>{props.labelSmall}</small>
                        }
                    </label>
                </div>
                <div className="col-xs-3">
                    <div className="h4 text-right">
                        <span className="label label-default">{props.value}</span>
                    </div>
                </div>
            </div>

            <input
                list={`tickmarks_${props.name}`}
                type="range" 
                name={props.name} 
                min={props.min} 
                max={props.max} 
                step={props.step} 
                value={props.value}
                onChange={props.onChange}
            />
            <datalist id={`tickmarks_${props.name}`}>
                { ticks.map(tick => (<option key={tick} value={tick}></option>)) }
            </datalist>
            {
                props.helpBlock
                &&
                <span className="help-block">{props.helpBlock}</span>
            }
            
        </div>
    )
}