'use strict';

export default function IncomeSettings(props) {
  let options = props.options.map(o => {
    return <option value={o.value} key={o.value}>{o.label}</option>
  });

  return (
    <select className="form-control" data-property={props.propName} onChange={props.onChange} value={props.currentValue}>
      {options}
    </select>
      );
}
