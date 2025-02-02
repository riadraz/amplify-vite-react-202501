import MultiSelect from '../components/ui/MultiSelect';
import SearchableSelect from '../components/ui/SearchableSelect';


  const options = [
    { value: '1', label: 'Computer' },
    { value: '2', label: 'Game Consol' },
    { value: '3', label: 'Fridge' },
    { value: '4', label: 'Laptop' },
  ];

  const handleChange = (value: string) => {
    console.log('Selected value:', value);
  };

  
export default function Inventory() {
  return (
    <div>
      <h1>Product Selection</h1>
      <MultiSelect />
      <SearchableSelect
      options={options}
      onChange={handleChange}
      placeholder="Select an option..."
      defaultValue="1"
      className="custom-select"
      disabled={false}
    />
    </div>
  );
}
