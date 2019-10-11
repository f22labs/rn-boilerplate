import { useContext } from 'react';
import { DropDownContext } from '../providers/DropDownProvider';

export default function useDropDown() {
  const context = useContext(DropDownContext);
  if (context === undefined) {
    throw new Error('useDropDown must be used within a DropDownProvider');
  }
  return context;
}
