'use strict';

export default function NumberField (props) {
  return (<input type="number" className="form-control" data-property={props.propName} value={props.value} onChange={props.onChange} />);
}
