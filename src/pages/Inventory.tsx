import MultiSelect from '../components/ui/MultiSelect';
import SearchableSelect from '../components/ui/SearchableSelect';
import S3ImageUpload from '../components/ui/S3ImageUpload';
  
  
export default function Inventory() {
  return (
    <div>
      <h1>Various React Component:</h1>
      <MultiSelect />
      
      <SearchableSelect />
      <S3ImageUpload />
      
  
    </div>
  );
}
