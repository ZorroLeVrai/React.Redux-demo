import { useDispatch } from 'react-redux';
import { inca1, inca2 } from '../../slices/firstSlice';
import { incb1, incb2 } from '../../slices/secondSlice';

const Controllers = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>Contrôle firstSlice</div>
      <div>
        <button onClick={() => dispatch(inca1())}>Modifier a1</button>
        <button onClick={() => dispatch(inca2())}>Modifier a2</button>
      </div>
      <div>Contrôle secondSlice</div>
      <div>
        <button onClick={() => dispatch(incb1())}>Modifier b1</button>
        <button onClick={() => dispatch(incb2())}>Modifier b2</button>
      </div>
    </>
  )
}

export default Controllers;