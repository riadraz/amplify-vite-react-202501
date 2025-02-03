import MultiSelect from '../components/ui/MultiSelect';
import SearchableSelect from '../components/ui/SearchableSelect';

  
  
export default function Inventory() {
  return (
    <div>
      <h1>Product Selection</h1>
      <MultiSelect />
      <div style={{ padding: '20px' }}>
        <h1>Product Selector</h1>
        <SearchableSelect />
      </div>
  
    </div>
  );
}
