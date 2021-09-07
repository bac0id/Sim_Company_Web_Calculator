import React, {useState, useEffect} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { dropDowButtonDark } from '../../../styles/material-ui-styles/dropDownDark';
import { useDispatch, useSelector  } from 'react-redux';
import { changeBuildingP } from '../../../actions/production';
import { productionBuildings } from '../../../data/languajeData.js/productionBuildings';
import { verifyddbBuilding } from '../../../auxiliar/verify';

const getBuildingsAccordingToLanguaje = ( languaje ) => {
  const pBuildings = productionBuildings();

  switch (languaje) {
    case 'english':
      return  pBuildings.english;

    case 'spanish':
      return pBuildings.spanish;
    
    default:
      return  pBuildings.english;
  }
}

export const BuildingDropDownButton = () => {
  
  const dispatch = useDispatch();

  const dropDowButtonDarkStyle = dropDowButtonDark();
  
  const { languaje } = useSelector( state => state.conf );
  const buildings = getBuildingsAccordingToLanguaje(languaje);
  
  const productionInfo = useSelector( state => state.production );
  const [building, setFase] = useState(verifyddbBuilding(productionInfo));
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setFase(event.target.value);
    //updateQuality(quality);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {

    if(building !== ''){
      dispatch( changeBuildingP(building) );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [building]);

  return (
    <div>
      <FormControl className={ dropDowButtonDarkStyle.formControl }>

        <InputLabel 
          id="demo-controlled-open-select-label" 
          className={ dropDowButtonDarkStyle.inputLabel } 
        > 
          Building 
        </InputLabel>
        
        <Select
          className={ dropDowButtonDarkStyle.inputBase }  
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={building}
          onChange={handleChange}
        >
          {
            buildings.map( ({id, name}) => (
              < MenuItem value={ id }   key={ id }> { name } </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}