import { CityInfo } from '../types/weatherTypes'; 

interface CityInfoCardProps {
  cityInfo: CityInfo;
}

const CityInfoCard: React.FC<CityInfoCardProps> = ({ cityInfo: { title, extract } }) => (
  <div className="bg-white rounded-lg shadow-sm p-3 m-1">
    <h3 className="font-semibold text-lg mb-1 text-gray-700">{title}</h3>
    <p className="text-gray-600 text-sm">{extract}</p>
  </div>
);

export default CityInfoCard;